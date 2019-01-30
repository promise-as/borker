"use strict";

/*经纪商 */
var app = new Vue({
  el: '#app',
  data: {
    sidebarNavList: [{
      icon: "icon-match",
      text: "兑入订单管理",
      href: "match.html"
    }, {
      icon: "icon-cash-out",
      text: "兑出订单管理",
      href: "cash_out.html"
    }, {
      icon: "icon-gathering",
      text: "收款订单管理",
      href: "gathering.html"
    }, {
      icon: "icon-remit",
      text: "数字资产汇款",
      href: "cny_set.html"
    }, {
      icon: "icon-custom",
      text: "自定义风格页面",
      href: "custom.html"
    }],
    userName: '张三',

    merchant: '', // 商户
    currentBalance: '1000USDT/￥7000.00', // 当前余额
    freezeBalance: '10USDT/￥70.00', // 冻结金额
    ableCashOutBalance: '990US', // 可兑出金额
    cashOutBalance: '', // 兑出金额
    cashOutOrderId: '', // 兑出单号

    payeeName: '', // 收款人姓名
    payeeBankName: '', // 收款人开户银行
    payeeAccount: '', // 收款账号
    smsCode: '', // 短信验证码

    setSucceed: false
  },

  methods: {
    closeRemitMsg: function closeRemitMsg() {
      this.isShowRemitMsg = false;
      this.setSucceed = true;
    },

    closeSucceed: function closeSucceed() {
      this.setSucceed = false;
    }
  }
});