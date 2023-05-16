import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
// import logger from "redux-logger";

const logger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  if (!action.type) {
    return next(action);
  }

  console.log("payload of: ", action.type, "=> ", action.payload);
  console.log("Current State of: ", action.type, "=> ", store.getState());

  next(action);

  console.log("Next State of: ", action.type, "=> ", store.getState());
};

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
