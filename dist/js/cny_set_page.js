"use strict";

$(function () {
  // 设置
  var $setBtns = $(".header-btn");
  var $addServers = $(".add-servers");
  var $orderContents = $(".order-content");

  // 编辑弹窗
  var $editDialog = $(".edit-mask");
  var $closeEdit = $(".closeEdit");
  var $editConfirm = $(".editConfirm");
  var $editCancel = $(".editCancel");

  // 日志弹窗
  var $logDialog = $(".match-mask");
  // 关闭日志
  var $closeLog = $(".closeLog");

  $setBtns.each(function (e) {
    $(this).click(function () {
      for (var i = 0; i < $setBtns.length; i++) {
        $($setBtns[i]).removeClass("active");
        $($orderContents[i]).removeClass("active");
      }
      $(this).addClass("active");
      if ($($setBtns[1]).hasClass("active")) {
        $addServers.css("display", "block");
        $($orderContents[1]).addClass("active");
      } else {
        $addServers.css("display", "none");
        $($orderContents[0]).addClass("active");
      }
    });
  });

  layui.config({
    // version: '1545041465443' //为了更新 js 缓存，可忽略
  });

  layui.use(['laydate', 'laypage', 'layer', 'table', 'element'], function () {
    var laypage = layui.laypage,
        //分页
    layer = layui.layer,
        //弹层
    table = layui.table; //表格

    //执行一个 table 实例
    table.render({
      elem: '#demo',
      url: './json/cny_set.json', // 数据接口,
      title: '订单表',
      page: true, //开启分页,
      toolbar: 'default', //开启工具栏，此处显示默认图标，可以自定义模板，详见文档,
      totalRow: true, //开启合计行,
      cols: [// 列数目
      [//表头
      {
        field: 'currency',
        title: '币种',
        width: '315',
        align: 'center'
      }, {
        field: 'exchangeRate',
        title: '汇率',
        width: '315',
        align: 'center'
      }, {
        title: '相关操作',
        toolbar: '#barDemo',
        width: '316',
        align: 'center'
      }]]
    });

    //监听行工具事件
    //注：tool 是工具条事件名，order 是 table 原始容器的属性 lay-filter="对应的值"
    table.on('tool(order)', function (obj) {
      var layEvent = obj.event; //获得 lay-event 对应的值

      if (layEvent === 'cny_set_edit') {
        // 下标
        var detailParentIndex = $($($(this)[0]).parents()[2]).attr("data-index");
        // console.log('编辑的下标', detailParentIndex)
        // 编辑显示
        $editDialog.css("display", "block");
        $closeEdit.click(function () {
          $editDialog.css("display", "none");
        });
        $editConfirm.click(function () {
          $editDialog.css("display", "none");
        });
        $editCancel.click(function () {
          $editDialog.css("display", "none");
        });
      } else if (layEvent === 'cny_set_log') {
        // 下标
        var logParentIndex = $($($(this)[0]).parents()[2]).attr("data-index");
        console.log("日志下标: ", logParentIndex);
        // 日志弹窗显示
        $logDialog.css("display", "block");
        // 日志关闭
        $closeLog.click(function () {
          $logDialog.css("display", "none");
        });
      }
    });

    //分页
    laypage.render({
      elem: 'pageDemo', //分页容器的id
      count: 10, //总页数
      skin: '#FBCD6C', //自定义选中色值
      skip: true, //开启跳页
      jump: function jump(obj, first) {
        if (!first) {
          layer.msg('第' + obj.curr + '页', { offset: 'b' });
        }
      }
    });
  });

  layui.use(['laydate', 'laypage', 'layer', 'table', 'element'], function () {
    var laypage = layui.laypage,
        //分页
    layer = layui.layer,
        //弹层
    table = layui.table; //表格

    //执行一个 table 实例
    table.render({
      elem: '#server',
      url: './json/servers_set.json', // 数据接口,
      title: '订单表',
      page: true, //开启分页,
      toolbar: 'default', //开启工具栏，此处显示默认图标，可以自定义模板，详见文档,
      totalRow: true, //开启合计行,
      cols: [// 列数目
      [//表头
      {
        field: 'number',
        title: '编号',
        width: '235',
        align: 'center'
      }, {
        field: 'serverName',
        title: '服务器名称',
        width: '235',
        align: 'center'
      }, {
        field: 'status',
        title: '状态',
        width: '235',
        align: 'center'
      }, {
        title: '相关操作',
        toolbar: '#barServer',
        width: '240',
        align: 'center'
      }]]
    });

    //监听行工具事件
    //注：tool 是工具条事件名，order 是 table 原始容器的属性 lay-filter="对应的值"
    table.on('tool(order)', function (obj) {
      var layEvent = obj.event; //获得 lay-event 对应的值

      if (layEvent === 'cny_set_edit') {
        // 下标
        var detailParentIndex = $($($(this)[0]).parents()[2]).attr("data-index");
        // console.log('编辑的下标', detailParentIndex)
        // 编辑显示
        $editDialog.css("display", "block");
        $closeEdit.click(function () {
          $editDialog.css("display", "none");
        });
        $editConfirm.click(function () {
          $editDialog.css("display", "none");
        });
        $editCancel.click(function () {
          $editDialog.css("display", "none");
        });
      } else if (layEvent === 'cny_set_log') {
        // 下标
        var logParentIndex = $($($(this)[0]).parents()[2]).attr("data-index");
        console.log("日志下标: ", logParentIndex);
        // 日志弹窗显示
        $logDialog.css("display", "block");
        // 日志关闭
        $closeLog.click(function () {
          $logDialog.css("display", "none");
        });
      }
    });

    //分页
    laypage.render({
      elem: 'pageDemo', //分页容器的id
      count: 10, //总页数
      skin: '#FBCD6C', //自定义选中色值
      skip: true, //开启跳页
      jump: function jump(obj, first) {
        if (!first) {
          layer.msg('第' + obj.curr + '页', { offset: 'b' });
        }
      }
    });
  });
}());