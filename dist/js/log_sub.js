"use strict";

/*
window.onload = function () {
  // 日志完成到的第几步(从0开始)
  var logFinishProgress = document.querySelector(".finish");
  // 获取所有的日志步骤元素
  var logDoms = logFinishProgress.parentNode.childNodes;
  // 日志完成到第几步
  var finishIndexNum = 0;

  // 找到对应的下标
  for(var i = 0, len = logDoms.length; i < len; i++){
    if(logDoms[i].className === 'finish'){
      finishIndexNum = i
    }
  }

  // 如果只完成第一步，直接返回
  if(finishIndexNum === 0) return null

  // 给对应的下标的上面兄弟添加类(.finish)
  for(var j = 0; j < finishIndexNum; j++){
    logDoms[j].classList.add('finish')
  }
}*/

$(function () {
  // 日志完成到的第几步(从0开始)
  var $finish = $(".finish");
  // 获取所有的日志步骤元素
  var $childs = $($finish.parent().children());
  // 日志完成到第几步
  var $finishIndex = 0;
  // 找到对应的下标
  $childs.each(function (e) {
    if ($(this).attr("class") === "finish") {
      $finishIndex = e;
    }
  });
  // 给对应的下标的上面兄弟添加类(.finish)
  for (var i = 0; i < $finishIndex; i++) {
    $($childs[i]).attr("class", "finish");
  }
}());