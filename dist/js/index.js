'use strict';

/*经纪商 首页*/

var app = new Vue({
  el: '#app',
  data: {
    sidebarData: ['兑入订单管理', '兑出订单管理', '收款订单管理', '数字资产汇款', '自定义风格页面 '],
    homeSidebarIndex: 0,
    cashOutOrderSidebarIndex: 1,
    assets: [{ title: '当前资产', USDT: '10000.00', CNY: '70000.00' }, { title: '冻结资产', USDT: '10000.00', CNY: '70000.00' }, { title: '可用资产', USDT: '10000.00', CNY: '70000.00' }],
    remitUrl: 'http://18.136.105.121:8087/acceptant/' + 'toPayPayeeConfigIndexPage?model=acceptor&fun=acceptor_edit',
    infoDetail: [{ name: '商户名称：', value: 'CPT' }, { name: '允许调用的IP：', value: '192.25.56.366' }, { name: '加密key：', value: '192.25.56.366' }, { name: '商户电话：', value: '192.25.56.366' }, { name: '商户邮箱：', value: 'zhongwuchisha@163.com' }, { name: '回调地址：', value: '192.25.56.366' }],
    order: 35461244321245,
    isHasOrder: false, // 是否有订单
    confirmOrPay: [{ value: '客户已确认转账!' }, { value: '已支付!' }],
    msgRemindIndex: 0, // 0是已确认，1是已支付
    orderItems: [{
      orderNumber: '20180802_1500022135',
      thirdPartyOrder: '1500022135',
      orderState: '待客户支付',
      facilitator: '李沅泽',
      time: '2018.8.3 15:15:15',
      payer: '张三',
      USDTNumber: '1000.01',
      sum: '7000.01' }, {
      orderNumber: '20180802_1500022135',
      thirdPartyOrder: '1500022135',
      orderState: '待客户支付',
      facilitator: '李沅泽',
      time: '2018.8.3 15:15:15',
      payer: '张三',
      USDTNumber: '1000.01',
      sum: '7000.01' }, {
      orderNumber: '20180802_1500022135',
      thirdPartyOrder: '1500022135',
      orderState: '待客户支付',
      facilitator: '李沅泽',
      time: '2018.8.3 15:15:15',
      payer: '张三',
      USDTNumber: '1000.01',
      sum: '7000.01' }, {
      orderNumber: '20180802_1500022135',
      thirdPartyOrder: '1500022135',
      orderState: '待客户支付',
      facilitator: '李沅泽',
      time: '2018.8.3 15:15:15',
      payer: '张三',
      USDTNumber: '1000.01',
      sum: '7000.01' }, {
      orderNumber: '20180802_1500022135',
      thirdPartyOrder: '1500022135',
      orderState: '待客户支付',
      facilitator: '李沅泽',
      time: '2018.8.3 15:15:15',
      payer: '张三',
      USDTNumber: '1000.01',
      sum: '7000.01' }, {
      orderNumber: '20180802_1500022135',
      thirdPartyOrder: '1500022135',
      orderState: '待客户支付',
      facilitator: '李沅泽',
      time: '2018.8.3 15:15:15',
      payer: '张三',
      USDTNumber: '1000.01',
      sum: '7000.01' }, {
      orderNumber: '20180802_1500022135',
      thirdPartyOrder: '1500022135',
      orderState: '待客户支付',
      facilitator: '李沅泽',
      time: '2018.8.3 15:15:15',
      payer: '张三',
      USDTNumber: '1000.01',
      sum: '7000.01' }, {
      orderNumber: '20180802_1500022135',
      thirdPartyOrder: '1500022135',
      orderState: '待客户支付',
      facilitator: '李沅泽',
      time: '2018.8.3 15:15:15',
      payer: '张三',
      USDTNumber: '1000.01',
      sum: '7000.01' }, {
      orderNumber: '20180802_1500022135',
      thirdPartyOrder: '1500022135',
      orderState: '待客户支付',
      facilitator: '李沅泽',
      time: '2018.8.3 15:15:15',
      payer: '张三',
      USDTNumber: '1000.01',
      sum: '7000.01' }],
    orderDetail: [{
      title: '订单信息'
    }],
    log: false,
    // 订单分类显示
    orderIndex: 0, // 0:全部,1:待处理
    orderText: ['全部订单', '待处理订单'],
    cashOutOrderDetailIsShow: false,
    // 提交打款信息
    isShowRemitMsg: false,
    submitRemitMsgBtn: ['确认', '取消'],
    submitRemitMsgBtnIndex: 0,
    // 发邮件
    sendEmailsSidebarIndex: 2,
    isShowSendEmail: false,
    // 发送成功
    isShowSendSucceed: false,

    // 兑出设置
    cashOutSet: false,

    // 汇率设置
    cnySetSidebarIndex: 3,
    cnySetText: ['汇率设置', '服务器设置']
  },
  // 组件已经挂载
  mounted: function mounted() {
    new ClipboardJS('.copy'); // 文本的复制

    var that = this;
    // 1秒之后消息框显示
    if (this.isHasOrder === false) {
      setTimeout(function () {
        that.isHasOrder = true;
      }, 1000);
    }

    // 1秒之后显示邮件发送成功
    setTimeout(function () {
      that.isShowSendSucceed = true;
    }, 1000);
  },
  // 组件已更新
  updated: function updated() {
    var that = this;
    // 3秒之后消息框隐藏
    if (this.isHasOrder === true) {
      setTimeout(function () {
        that.isHasOrder = false;
      }, 3000);
    }
  },
  methods: {
    // 侧栏tab
    indexTab: function indexTab(index) {
      this.homeSidebarIndex = index;
      this.cashOutOrderSidebarIndex = index;
      this.sendEmailsSidebarIndex = index;
      this.cnySetSidebarIndex = index;
    },

    lookLog: function lookLog() {
      this.log = true;
    },

    closeLog: function closeLog() {
      this.log = false;
    },

    orderTextTab: function orderTextTab(index) {
      this.orderIndex = index;
    },

    voucher: function voucher() {
      this.cashOutOrderDetailIsShow = true;
    },

    closeVoucher: function closeVoucher() {
      this.cashOutOrderDetailIsShow = false;
    },

    showRemitMsg: function showRemitMsg() {
      this.isShowRemitMsg = true;
    },

    closeRemitMsg: function closeRemitMsg() {
      this.isShowRemitMsg = false;
    },

    btnIndexTab: function btnIndexTab(index) {
      this.submitRemitMsgBtnIndex = index;
    },

    showSendEmails: function showSendEmails() {
      this.isShowSendEmail = true;
    },
    closeSendEmails: function closeSendEmails() {
      this.isShowSendEmail = false;
    },
    closeSendSucceed: function closeSendSucceed() {
      this.isShowSendSucceed = false;
    },
    showCashOutSet: function showCashOutSet() {
      this.cashOutSet = true;
    },
    closeCashOutSet: function closeCashOutSet() {
      this.cashOutSet = false;
    }
  }
});