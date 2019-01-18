"use strict";

// 上一次登录的时间
var lastZfkDom = document.querySelector("#lastZfk");
var lastHmsDom = document.querySelector("#lastHms");

// 读localStorage
var zfk = localStorage.getItem("zfk");
var hms = localStorage.getItem("hms");

// 赋值
lastZfkDom.innerText = zfk;
lastHmsDom.innerText = hms;