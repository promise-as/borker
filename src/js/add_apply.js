/*经纪商 */
var app = new Vue({
  el: '#app',
  data: {
    sidebarNavList: [
      {
        icon: "icon-match",
        text: "兑入订单管理",
        href: "index.html"
      },
      {
        icon: "icon-cash-out",
        text: "兑出订单管理",
        href: "cash_out.html"
      },
      {
        icon: "icon-gathering",
        text: "收款订单管理",
        href: "gathering.html"
      },
      {
        icon: "icon-remit",
        text: "数字资产汇款",
        href: "cny_set.html"
      },
      {
        icon: "icon-custom",
        text: "自定义风格页面",
        href: "javascript:;"
      }
    ],

    // 发邮件
    isShowSendEmail: false,
    // 发送成功
    isShowSendSucceed: false,
    // 汇率设置
    cnySetText: ['汇率设置', '服务器设置']
  },
})