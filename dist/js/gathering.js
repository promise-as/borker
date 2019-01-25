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
      href: "javascript:;"
    }],

    // 兑入订单
    matchOrderFinishData: [{
      title: '服务商（user2）确认已收款',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }, {
      title: '服务商（user2）恢复订单，备注：120min收到应收款',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }, {
      title: '运营方（admin）取消订单，备注：经核实90min未收到应收款',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }, {
      title: '服务商（user2）确认未收款，备注：30min未收到应收款',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }, {
      title: '客户确认转账',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }, {
      title: '创建入金订单',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }],
    finishIndex: 3 // 日志完成的步骤(从0开始)
  }
});