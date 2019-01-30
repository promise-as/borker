"use strict";

var uploadVessel = document.querySelector(".upload_vessel");
var chooseImg = document.querySelector("#upload");
var imgCalc = document.querySelector("#img_calc");
var imgNumDom = document.querySelector("#calc_num");
// 图片数量
var imgNum = 0,
    len = 1; //imgBox里面子元素的个数

chooseImg.onchange = function () {
  // 减去label标签
  imgNum = len;
  // 创建dom
  var imgVessel = document.createElement("div");
  var delImg = document.createElement("i");
  var imgFile = document.createElement("img");
  imgVessel.classList.add("img_vessel");
  delImg.classList.add("del_img");

  delImg.onclick = function () {
    console.log(111, imgNum);
    imgNum = imgNum - 1;
    this.parentNode.style.display = "none";
    imgNumDom.innerText = imgNum;

    if (imgNum === 0) {
      imgCalc.style.display = "none";
    }
  };
  if (imgNum > 4) {
    imgNum = imgNum - 1;

    alert("最多只能上传4张图片");
    return null;
  }
  imgNumDom.innerText = imgNum;
  var reads = new FileReader();
  var file = chooseImg.files[0];
  reads.readAsDataURL(file);
  reads.onload = function () {
    imgFile.src = this.result;
  };
  // 添加一个子元素
  imgVessel.appendChild(imgFile);
  imgVessel.appendChild(delImg);
  uploadVessel.appendChild(imgVessel);
  imgCalc.style.display = "block";
  len = uploadVessel.childNodes.length;
};