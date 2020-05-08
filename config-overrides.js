const { override } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

const _rewireReactHotLoader = (config, env) => {
  if (env === 'development') {
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
  }

  return rewireReactHotLoader(config, env);
};

module.exports = {
  webpack: (config, env) => {
    return override(_rewireReactHotLoader)(config, env);
  },
  // jest: (config) => config,
};
