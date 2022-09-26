const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
  }
  next(action);
};

export default gameMiddleware;
