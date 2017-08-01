'use strict';
const debug = require('debug')('home')

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
      this.ctx.redirect('/index.html')
      /*
      const { data, status } = yield this.login()
      if (status === 200 && data.OPT_STATUS) {
        this.ctx.cookies.set('auth_token', data.DATA.TOKEN)
        this.ctx.redirect('/index.html')
      } else {
        // this.ctx.body = '登录失败，请确认登录密码后重试。。。 \n\n' + data;
        let t = yield this.home()
        this.ctx.body = t.data.toString()
      }
      */
    }

    login() {
      const url = this.config.env.host + '/api/login'
      return this.ctx.curl(url, {
        method: 'post',
        contentType: 'json',
        data: {
          email: 'x@yunshan.net.cn',
          password: 'admin'
        },
        dataType: 'json',
      })
    }

    home() {
      this.config.static.prefix = '/'
      return this.ctx.curl('https://daily.dev.yunshan.net.cn/login', {
      })
    }
  }
  return HomeController;
};
