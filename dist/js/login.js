'use strict';

var app = new Vue({
  el: '#app',
  data: function data() {
    return {
      mobile: ''
    };
  },

  watch: {
    // 通过watch来设置空格
    mobile: function mobile(newValue, oldValue) {
      if (newValue.length > oldValue.length) {
        // 文本框中输入
        if (newValue.length === 3 || newValue.length === 8) {
          this.mobile = this.mobile + " ";
        }
      } else {
        // 文本框中删除
        if (newValue.length === 9 || newValue.length === 4) {
          this.mobile = this.mobile.trim();
        }
      }
    }
  }
});