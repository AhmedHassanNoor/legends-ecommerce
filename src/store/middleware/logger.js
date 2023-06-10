const logger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  if (!action.type) {
    return next(action);
  }
  next(action);
};

export default logger;
