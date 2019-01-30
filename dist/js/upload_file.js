'use strict';

$(function () {
  // 上传文件
  $('input[id=upFile]').change(function () {
    $('#photoCover').val($(this).val());
  });
});