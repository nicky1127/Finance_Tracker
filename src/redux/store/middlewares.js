import sysLogger from '../../utils/logger';

export const logger = store => next => action => {
  console.group(action.type);
  sysLogger.info('dispatching', action);
  let result = next(action);
  sysLogger.debug('next state', store.getState());
  console.groupEnd();
  return result;
};

export const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};
