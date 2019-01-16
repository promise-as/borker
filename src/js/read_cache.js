window.onload = function () {
  var zfkDom = document.querySelector("#zfk");
  var wattDom = document.querySelector("#watt");
  var hmsDom = document.querySelector("#hms");

  var lastZfkDom = document.querySelector("#lastZfk");
  var lastHmsDom = document.querySelector("#lastHms");

  // 读localStorage
  var zfk = localStorage.getItem("zfk");
  var watt = localStorage.getItem("watt");
  var hms = localStorage.getItem("hms");

  // 赋值
  zfkDom.innerText = zfk;
  wattDom.innerText = watt;
  hmsDom.innerText = hms;

  lastZfkDom.innerText = zfk;
  lastHmsDom.innerText = hms;
};