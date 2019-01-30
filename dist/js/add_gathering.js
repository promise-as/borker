"use strict";

/*经纪商 兑出详情*/
var app = new Vue({
  el: '#app',
  data: {
    sidebarNavList: [{
      icon: "icon-match",
      text: "兑入订单管理",
      href: "index.html"
    }, {
      icon: "icon-cash-out",
      text: "兑出订单管理",
      href: "cash_out.json.html"
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
      href: "javascript:;"
    }],
    orderData: [{
      key: "订单信息"
    }, {
      key: "*收款公司名称：",
      val: ""
    }, {
      key: "*付款公司名称：",
      val: ""
    }, {
      key: "*产片名称：",
      val: ""
    }, {
      key: "*收款金额：",
      val: ""
    }, {
      key: "*截止日期：",
      val: "2018.10.10"
    }]
  },
  methods: {}
});