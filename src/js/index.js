/*经纪商 首页*/
var app = new Vue({
  el: '#app',
  data: {
    sidebarNavList: [
      {
        icon: "icon-match",
        text: "兑入订单管理",
        href: "match.html"
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
        href: "custom.html"
      }
    ],
    userName: '张三',

    assets: [
      {title: '当前资产', USDT: '10000.00', CNY: '70000.00'},
      {
        title: '冻结资产',
        USDT: '10000.00',
        CNY: '70000.00'
      },
      {title: '可用资产', USDT: '10000.00', CNY: '70000.00'}],
    remitUrl: 'http://18.136.105.121:8087/acceptant/' + 'toPayPayeeConfigIndexPage?model=acceptor&fun=acceptor_edit',
    infoDetail: [
      {name: '商户名称：', value: 'CPT'},
      {name: '允许调用的IP：', value: '192.25.56.366'},
      {
        name: '加密key：',
        value: '192.25.56.366'
      },
      {name: '商户电话：', value: '192.25.56.366'},
      {name: '商户邮箱：', value: 'zhongwuchisha@163.com'},
      {
        name: '回调地址：',
        value: '192.25.56.366'
      }
    ],
    order: 35461244321245,
    isHasOrder: false, // 是否有订单
    confirmOrPay: [{value: '客户已确认转账!'}, {value: '已支付!'}],
    msgRemindIndex: 0, // 0是已确认，1是已支付
    orderDetail: [{
      title: '订单信息'
    }],
  },
  // 组件已经挂载
  mounted: function(){

    var that = this
    // 1秒之后消息框显示
    if (this.isHasOrder === false) {
      setTimeout(function () {
        that.isHasOrder = true
      }, 1000)
    }
  },
  // 组件已更新
  updated: function(){
    var that = this
    // 2秒之后消息框隐藏
    if (this.isHasOrder === true) {
      setTimeout(function () {
        that.isHasOrder = false
      }, 2000)
    }
  },
})