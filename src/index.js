import camelcaseKeys from './camelcaseKeys';

const defaultOptions = { global: true };

const checkCamelCaseKey = (action) => {
  if (typeof action === 'object') {
    return (options.global || !!action.camelCase || !!action.meta.arg.camelCase)
      && action.camelCase !== false
  }
}

const camelMiddleware = (options = defaultOptions) => store => next => action => {
  const shouldCamelCaseKeys =  checkCamelCaseKey(action);

  if (typeof action === 'object' && shouldCamelCaseKeys) {
    const newAction = camelcaseKeys(action);
    return next(newAction);
  } else {
    return next(action);
  }
}

export default camelMiddleware;
