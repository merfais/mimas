'use strict';
const path = require('path')

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1499615535816_4907';

  // add your config here
  config.static = {
    prefix: '/',
    dir: path.resolve(__dirname, '../public'),
  }

  config.security = {
    csrf: false
  }

  config.env = {
    host: 'https://daily.dev.yunshan.net.cn:10086'
  }

  config.bodyParser = {
    queryString: {
      depth: Infinity
    }
  }

  return config;
};
