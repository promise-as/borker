window.onload = function () {
  layui.use(['carousel'], function(){
    var carousel = layui.carousel;

    //常规轮播
    carousel.render({
      elem: '#carousel', // 元素
      width: '450',
      height: '281',
      arrow: 'always', // 左右箭头
      indicator: 'none'
    });
  });
}