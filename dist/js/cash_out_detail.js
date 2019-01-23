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
    cashOutOrderDetailIsShow: false,
    isShowRemitMsg: false,
    submitRemitMsgBtn: ['确认', '取消'],
    submitRemitMsgBtnIndex: 0,
    orderData: [[{
      key: "订单信息"
    }, {
      key: "订单编号: ",
      val: "20180802_1500022135"
    }, {
      key: "支付单号: ",
      val: "1500022135"
    }, {
      key: "订单状态: ",
      val: "待服务商收款"
    }, {
      key: "USTD数量: ",
      val: "1000"
    }, {
      key: "经纪商: ",
      val: "CPT"
    }], [{
      key: "付款信息"
    }, {
      key: "收款金额: ",
      val: "￥7000"
    }, {
      key: "付款人姓名: ",
      val: "张三"
    }, {
      key: "收款人银行: ",
      val: "农业银行 广东茂名市茂东支行"
    }, {
      key: "收款人账号: ",
      val: "6228 4811 7674 6694 972"
    }, {
      key: "收款凭证: ",
      val: "查看凭证"
    }], [{
      key: "服务商信息"
    }, {
      key: "服务商名称: ",
      val: "玉米蒸"
    }, {
      key: "服务次数: ",
      val: "10010"
    }, {
      key: "平均确认时长: ",
      val: "00:05:00"
    }]],
    remark: '1111111111111'
  },
  methods: {
    voucher: function voucher() {
      this.cashOutOrderDetailIsShow = true;
    },
    closeVoucher: function closeVoucher() {
      this.cashOutOrderDetailIsShow = false;
    },
    closeRemitMsg: function closeRemitMsg() {
      this.isShowRemitMsg = false;
    },
    showRemitMsg: function showRemitMsg() {
      this.isShowRemitMsg = true;
    },
    btnIndexTab: function btnIndexTab(index) {
      this.submitRemitMsgBtnIndex = index;
    }
  }
});