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
    cashOutOrderDetailIsShow: false,
    isShowRemitMsg: false,
    submitRemitMsgBtn: ['确认', '取消'],
    submitRemitMsgBtnIndex: 0,


    orderData: [
      [
        {
          key: "订单信息"
        }, {
        key: "收款订单编号: ",
        val: "REC201808150303030001"
      }, {
        key: "兑入订单编号: ",
        val: "20180802_1500022135"
      }, {
        key: "订单状态: ",
        val: "待支付"
      }, {
        key: "收款金额(USTD): ",
        val: "1000"
      }, {
        key: "截止日期: ",
        val: "2018.10.10"
      }, {
        key: "收款公司名称: ",
        val: "深圳才华有限公司"
      }, {
        key: "付款公司名称: ",
        val: "深圳才华有限公司"
      }, {
        key: "产品名称: ",
        val: "服务费"
      }], [{
        key: "付款信息"
      }, {
        key: "收款金额: ",
        val: "￥7000"
      }, {
        key: "付款人姓名: ",
        val: "张三"
      }, {
        key: "公司名称: ",
        val: "深圳才华有限公司"
      }, {
        key: "业务联络人: ",
        val: "张三"
      }, {
        key: "联系电话: ",
        val: "13809735212"
      }, {
        key: "电子邮箱: ",
        val: "13809735212@163.com"
      }, {
        key: "备注: ",
        val: "已支付，请贵公司查收"
      }
      ]
    ],
    remark: '',

    carouselImg: ['./images/icon/logo_abc.png', './images/icon/logo_bcc.png', './images/icon/logo_ccb.png', './images/icon/logo_cm.png']
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