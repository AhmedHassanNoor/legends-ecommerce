import { createAction } from "../../utils/reducer";
import { USER_ACTION_TYPES } from "./types";

/*
 * USER SESSION
 */
export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

/*
 * USER SIGN IN THROUGH EMAIL AND GOOGLE
 */
export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const userSignInSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const userSignInFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

/*
 * USER SIGN UP
 */
export const userSignUpStart = (email, password) =>
  createAction(USER_ACTION_TYPES.USER_SIGN_UP_START, { email, password });

export const userSignUpSuccess = (user, displayName) =>
  createAction(USER_ACTION_TYPES.USER_SIGN_UP_SUCCESS, user, displayName);

export const userSignUpFailed = (error) => createAction(USER_ACTION_TYPES.USER_SIGN_UP_FAILED, error);

/*
 * USER SIGN OUT
 */
export const userSignOutUserStart = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const userSignOutSuccess = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const userSignOutFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED);
