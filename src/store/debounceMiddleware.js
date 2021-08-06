/*
 * Original author @sanathsharma, while asking for a { meta } key inside
 * the new redux-toolkit:
 * link: https://github.com/reduxjs/redux-toolkit/issues/750
 */

// stores a reference for clearTimeout
const timeout = {};

// ({ dispatch }) =>

export const debounceMiddleware = () => (next) => (action) => {
  // extract the debounce duration(delay)
  const debounce = action.meta?.debounce;

  // if debounce flag not enabled, forward the action to next middleware
  // zero is falsy
  if (!debounce) return next(action);

  // clear timeout for the action
  clearTimeout(timeout[action.type]);

  // set(first time)/reset timeout for the action
  timeout[action.type] = setTimeout(() => {
    // delete the debounce key, if action gets dispatched again in the upcomming middlewares
    delete action.meta?.debounce;

    // delete the timeout in the timeout object (optional)
    delete timeout[action.type];

    // forward to next middleware
    next(action);
  }, debounce);
};
