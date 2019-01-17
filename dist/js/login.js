'use strict';

var app = new Vue({
  el: '#app',
  data: {
    mobile: '',
    pwd: '',
    url: '',

    isDialog: false,
    alertText: ''
  },

  /*watch: {
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
  },*/

  methods: {
    login: function login() {
      var that = this;
      /*if (that.mobile && that.pwd) {
        axios.post('url',{
          mobile:that.mobile,
          pwd:that.pwd,
        }).then(function (response) {
         }).catch(function (error) {
          // 弹框提示
          dialog(that,error);
        });
      } else {
        // 弹框提示
        dialog(that,"请输入用户名或密码");
      }*/
    }
  }
});