import { all, call, put, takeLatest } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./types";
import {
  userSignInSuccess,
  userSignInFailed,
  userSignOutSuccess,
  userSignUpFailed,
  userSignUpSuccess,
  userSignOutFailed,
} from "./actions";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

/*
 * USER SESSION GENERATORS
 */

export function* getUserSnapshotFromUserAuth(user) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, user.uid, user.displayName, user.email);
    yield put(userSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(userSignInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getUserSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(userSignInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

/*
 *
 * USER SIGN IN WITH EMAIL GENERATORS
 *
 */

export function* userSignInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
    if (!user) return;
    yield call(getUserSnapshotFromUserAuth, user);
  } catch (error) {
    switch (error.code) {
      case "auth/wrong-password":
        alert("incorrect password for email");
        break;
      case "auth/user-not-found":
        alert("no user associated with this email");
        break;
      default:
        yield put(userSignInFailed(error));
    }
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, userSignInWithEmail);
}

/*
 *
 * USER SIGN IN WITH GOOGLE GENERATORS
 *
 */

export function* userSignInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    if (!user) return;
    yield call(getUserSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(userSignInFailed(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, userSignInWithGoogle);
}

/*
 *
 * USER SIGN UP GENERATORS
 *
 */

export function* userSignUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);

    if (!user) return;
    yield put(userSignUpSuccess(user, displayName));
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      yield alert(" Cannot create user, email already in use!");
    } else {
      yield alert(error.message);
      yield put(userSignUpFailed(error));
    }
  }
}

function* userSignInAfterSignUp({ payload: { user, displayName } }) {
  yield call(getUserSnapshotFromUserAuth, { ...user, displayName });
}

export function* onUserSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.USER_SIGN_UP_START, userSignUp);
}

export function* onUserSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.USER_SIGN_UP_SUCCESS, userSignInAfterSignUp);
}

/*
 *
 * USER SIGN OUT GENERATORS
 *
 */

export function* signOutUserAsync() {
  try {
    yield call(signOutUser);
    yield put(userSignOutSuccess());
  } catch (error) {
    yield put(userSignOutFailed(error));
  }
}

export function* onUserSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutUserAsync);
}

/*
 *
 * EXPORTED USER SAGA WITH ALL GENERATOR FUNCTIONS
 *
 */

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onGoogleSignInStart),
    call(onUserSignUpStart),
    call(onUserSignOutStart),
  ]);
}
