"use strict";

/*经纪商 兑出*/
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

    orderIndex: 0, // 0:全部,1:待处理
    orderText: ['全部订单', '待处理订单'],

    // 兑出设置
    cashOutSet: false,
    mobile: 13809735212,
    smsVerify: true,
    smsCode: '', // 短信验证码

    // 兑出订单
    matchOrderFinishData: [{
      title: '经纪商（user1）确认',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }, {
      title: '服务商（user2）确认打款',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }, {
      title: '经纪商（user1）创建出金订单',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }],
    finishIndex: 1 // 日志完成的步骤(从0开始)
  },

  mounted: function mounted() {
    var that = this;
    if (typeof that.mobile === "number") {
      that.mobile = that.mobile + '';
    }
    that.mobile = that.mobile.substr(0, 3) + '****' + that.mobile.substr(7, 11);
  },

  methods: {
    orderTextTab: function orderTextTab(index) {
      this.orderIndex = index;
    },

    showCashOutSet: function showCashOutSet() {
      this.cashOutSet = true;
    },
    closeCashOutSet: function closeCashOutSet() {
      this.cashOutSet = false;
    },

    submitSmsCode: function submitSmsCode() {
      axios.post('url').then(function (response) {
        // handle success
        console.log(response);
      }).catch(function (error) {
        // handle error
        console.log(error);
      }).then(function () {
        // always executed
      });
      this.cashOutSet = false;
    },

    needSmsVerify: function needSmsVerify() {
      this.smsVerify = true;
    },
    withoutSmsVerify: function withoutSmsVerify() {
      this.smsVerify = false;
    }
  }
});