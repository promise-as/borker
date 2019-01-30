"use strict";

/*经纪商 兑出详情*/
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

    setSucceed: false,

    hintText: '选中10条数据，成功生成6条出金订单， 4条数据生成失败'
  },
  methods: {
    confirmRemitMsg: function confirmRemitMsg() {
      this.setSucceed = true;
    },
    closeSucceed: function closeSucceed() {
      this.setSucceed = false;
    }
  }
});