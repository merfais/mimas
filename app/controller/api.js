'use strict';

const qs = require('qs')

module.exports = app => {
  class ApiController extends app.Controller {

    constructor(ctx) {
      super(ctx)
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
      this.host = this.config.env.host
    }

    * json() {
      // 常用请求，dataType = json
      const url = this.host + this.ctx.url
      const method = this.ctx.method
      const data = this.ctx.request.body
      const result = yield this.ctx.curl(url, {
        method,
        data,
        dataType: 'json',
        nestedQuerystring: true,
        headers: {
          authorization: this.ctx.request.get('authorization')
        },
      })
      this.ctx.logger.info('request => \n[url] =>%s\n[method] => %s\n', url, method)
      this.ctx.logger.info('[body] => %j\n[response] => %j\n', data, result.res)
      this.ctx.set(result.headers)
      this.ctx.status = result.status
      this.ctx.body = result.data
    }

    * file() {
      // 文件上传下载
    }

    * stream() {
      // 流媒体
    }

    * head() {

    }

    * options() {

    }

    * get() {
      yield this.json()
    }

    * put() {
      yield this.json()
    }

    * post() {
      yield this.json()
    }

    * patch() {
      yield this.json()
    }

    * del() {
      yield this.json()
    }
  }
  return ApiController;
};
