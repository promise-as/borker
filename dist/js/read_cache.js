"use strict";

// 读缓存
window.onload = function () {
  var zfkDom = document.querySelector("#zfk");
  var wattDom = document.querySelector("#watt");
  var hmsDom = document.querySelector("#hms");

  // 读localStorage
  var zfk = localStorage.getItem("zfk");
  var watt = localStorage.getItem("watt");
  var hms = localStorage.getItem("hms");

  // 赋值
  zfkDom.innerText = zfk;
  wattDom.innerText = watt;
  hmsDom.innerText = hms;
};