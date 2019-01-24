$(function () {
  // 日志完成到的第几步(从0开始)
  var $finish = $(".finish");
  // 获取所有的日志步骤元素
  var $childs = $($finish.parent().children());
  // 日志完成到第几步
  var $finishIndex = 0;
  // 找到对应的下标
  $childs.each(function (e) {
    if($(this).attr("class") === "finish"){
      $finishIndex = e;
    }
  })
  // 给对应的下标的上面兄弟添加类(.finish)
  for(var i = 0; i < $finishIndex; i++){
    $($childs[i]).attr("class", "finish");
  }
}())