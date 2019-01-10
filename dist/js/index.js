'use strict';

/*经纪商 首页*/

var app = new Vue({
  el: '#app',
  data: {
    sidebarData: ['兑入订单管理', '兑出订单管理', '收款订单管理', '数字资产汇款', '自定义风格页面 '],
    currentIndex: 0
  },
  methods: {
    // 侧栏tab
    indexTab: function indexTab(index) {
      this.currentIndex = index;
    }
  }
});