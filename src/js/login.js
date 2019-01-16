var app = new Vue({
  el: '#app',
  data: {
    mobile: '',
    pwd: '',
    url: '',

    isDialog: false,
    alertText: '',
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
  },

  methods: {
    /*login: function (e) {
      var that = this;
      console.log(e.target)
      if(that.mobile === '' || that.pwd === ''){
        new dialog(that, '用户名或者密码错误');
        that.url = ''
      }else{
        new dialog(that, '登录成功');
        that.url = 'index.html'
      }
    }*/
  }
});