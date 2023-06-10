import { call, all, put, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase";
import { fetchCategoriesFailed, fetchCategoriesSuccess } from "./actions";
import { CATEGORIES_ACTION_TYPES } from "./types";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
