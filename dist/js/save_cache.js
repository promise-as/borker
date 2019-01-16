"use strict";

// 存缓存
window.onload = function () {
  var myDate = new Date(); //获取系统当前时间
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1; // 从0开始
  var day = myDate.getDate();
  var week = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
  var hour = myDate.getHours(); //获取当前小时数(0-23)
  var minute = myDate.getMinutes(); //获取当前分钟数(0-59)
  var second = myDate.getSeconds(); //获取当前秒数(0-59)

  // 拼接0
  function spliceZero(num) {
    if (num < 10) {
      num = '0' + num;
    }
    return num;
  }
  // 日期拼接
  function dateSplice(year, month, day) {
    return year + "." + month + "." + day;
  }
  // 时间拼接
  function timeSplice(hour, minute, second) {
    return hour + ":" + minute + ":" + second;
  }
  // 星期格式化
  function weekFormat(week) {
    switch (week) {
      case 0:
        week = "星期日";
        break;
      case 1:
        week = "星期一";
        break;
      case 2:
        week = "星期二";
        break;
      case 3:
        week = "星期三";
        break;
      case 4:
        week = "星期四";
        break;
      case 5:
        week = "星期五";
        break;
      case 6:
        week = "星期六";
        break;
      default:
        week = '周末';
    }

    return week;
  }

  // 年月日
  var zfk = dateSplice(year, spliceZero(month), spliceZero(day));
  // 星期
  var watt = weekFormat(week);
  // 时分秒
  var hms = timeSplice(spliceZero(hour), spliceZero(minute), spliceZero(second));

  // 存localStorage
  localStorage.setItem('zfk', zfk);
  localStorage.setItem('watt', watt);
  localStorage.setItem('hms', hms);
};