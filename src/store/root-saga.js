import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/saga";
import { userSaga } from "./user/saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}
