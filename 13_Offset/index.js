const box = document.querySelector(".box");
const btn = document.querySelector(".btn");

console.log("box的offsetWidth是200++padding0+border4*2=208：", box.offsetWidth);
console.log(
  "box的offsetHigth是200+padding50+border4*2=258：",
  box.offsetHeight
);
console.log(
  "box的offsetTop是box的margin20+headerH10+container-border-1px：",
  box.offsetTop
);

console.log(
  "box的offsetLeft是box的margin20+container-border-1px：",
  box.offsetLeft
);

/**
 * 容器box的offsetWidth=自身的Width+padding-left+padding-right+border-left+border-right;
 * 容器box的offsetHeight=自身的Width+padding-top+padding-bottom+border-top+border-bottom;
 *容器box的offsetTop=自身的margin-top+直到视窗顶部的距离
 容器box的offsetLeft = 自身margin-left+直到视窗顶部的距离
 */

console.log(box.clientWidth);
console.log(box.clientHeight);
console.log(box.clientTop);
console.log(box.clientLeft);

/**
 * 容器box的clientWidth=自身的Width+padding-left+padding-right;
 * 容器box的clientHeight=自身的Width+padding-top+padding-bottom;
 *容器box的offsetTop=自身的border-top
 容器box的offsetLeft = 自身border-left
 也可以称为 可视区，如果存在滚动条，还要再减去滚动条存在的区域大小
 */

btn.addEventListener("click", () => {
  console.log(box.scrollWidth);
  console.log(box.scrollHeight);
  console.log(box.scrollTop);
  console.log(box.scrollLeft);
});

/**
 * 容器box的scrollWidth=clientWidth + 元素滚动条超出可视区的宽度;
 * 容器box的clientHeight=scrollHeight+元素滚动条超出可视区的高度;
 *容器box的scrollTop= 自身的超出可视区的top距离
 容器box的scrollLeft = 自身超出可视区的Left距离
 也可以称为 可视区
 */
