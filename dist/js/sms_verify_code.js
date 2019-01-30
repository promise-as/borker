"use strict";

$(function () {

  var $btn = $("#getCode")[0];
  // 点击click
  $($btn).click(function () {

    // 倒计时效果 getCode回调函数 获取验证码api
    // 总时间
    var totalTime = 60;

    countdown($(this), totalTime);
  });
  // 页面刷新
  refresh($($btn));

  // 倒计时效果
  function countdown(obj, totalTime) {
    if (obj.val() === "发送验证码") {
      // 剩余时间
      var remainTime = totalTime;
      obj.val('(' + totalTime + ')' + "秒后重新发送");
      // 按钮不能点击
      $btn.disabled = true;
      // 定时器
      var timer = setInterval(function () {
        if (remainTime > 1) {
          remainTime--;
          obj.val('(' + remainTime + ')' + "秒后重新发送");
          updateCache(remainTime);
        } else {
          clearInterval(timer);
          obj.val("获取验证码");
          $btn.disabled = false;
        }
      }, 1000);
    }
  }

  // 离开页面/刷新页面 重新运行计时器
  function refresh(obj) {
    // 取出来的是个对象 包含当前时间（毫秒形式）和剩余时间
    var localCache = readCache();
    if (localCache.time != null) {
      // (离开浏览器或刷新) = 间隔时间当前北京时间(毫秒形式) - 离开页面(刷新)时刻 存储的某时刻的时间(毫秒形式)
      var timeLine = parseInt((new Date().getTime() - localCache.time) / 1000);
      //l ocalCache.delay：剩余时间
      if (timeLine > localCache.delay) {
        console.log("倒计时已经跑完");
        // 清除session中的数据
        sessionStorage.removeItem('delay_' + location.href);
        sessionStorage.removeItem('time_' + location.href);
      } else {
        // 当时剩余时间 - 离开的时间差 = 最新剩余时间
        var newRemainTime = localCache.delay - timeLine;
        obj.val('(' + newRemainTime + ')' + "秒后重新发送");
        document.getElementById("getCode").disabled = true;
        var timer = setInterval(function () {
          if (newRemainTime > 1) {
            newRemainTime--;
            obj.val('(' + newRemainTime + ')' + "秒后重新发送");
            updateCache(newRemainTime);
          } else {
            clearInterval(timer);
            obj.val("获取验证码");
            $btn.disabled = false;
          }
        }, 1000);
      }
    }
  }

  // 存/更新 sessionStorage
  function updateCache(delay) {
    // location.href作为页面的唯一标识，可能一个项目中会有很多页面需要获取验证码。
    // 存储剩余时间
    sessionStorage.setItem("delay_" + location.href, delay);
    // 存储当前时间（毫秒形式）
    sessionStorage.setItem("time_" + location.href, new Date().getTime());
  }

  // 读 sessionStorage
  function readCache() {
    var localCache = {};
    //取出剩余时间
    localCache.delay = sessionStorage.getItem("delay_" + location.href);
    //取出当前时间（毫秒形式时间）
    localCache.time = sessionStorage.getItem("time_" + location.href);
    return localCache;
  }
});