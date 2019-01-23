// 读缓存
$(function () {
  var $zfkDom = $("#zfk");
  var $wattDom = $("#watt");
  var $hmsDom = $("#hms");

  // 读localStorage
  var zfk = localStorage.getItem("zfk");
  var watt = localStorage.getItem("watt");
  var hms = localStorage.getItem("hms");

  // 赋值
  $($zfkDom).text(zfk);
  $($wattDom).text(watt);
  $($hmsDom).text(hms);
}())