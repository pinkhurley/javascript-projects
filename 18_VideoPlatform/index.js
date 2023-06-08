const sliderContainer = document.querySelector(".movie-lists-main ul"),
  slider = document.querySelector(".slider"),
  sliderDot = document.querySelector(".slider .dot");

let sliderWidth = slider.clientWidth,
  sliderDotWidth = sliderDot.clientWidth,
  moveWidth = sliderWidth - sliderDotWidth,
  dragging = false,
  sliderStartLeft,
  startX;

const sliderStart = (e) => {
  dragging = true;
  sliderStartLeft = sliderDot.style.left;
  startX = e.pageX - sliderStartLeft.slice(0, -2);
};

const sliderDragging = (e) => {
  if (!dragging) return;
  // move dot

  const offsetX = e.pageX - startX;
  // console.log(offsetX / moveWidth);
  if (offsetX >= 0 && offsetX <= moveWidth) {
    sliderDot.style.left = `${offsetX}px`;
    sliderContainer.scrollLeft =
      (offsetX / moveWidth) *
      (sliderContainer.scrollWidth - sliderContainer.clientWidth);
  }
};

const sliderDragEnd = () => {
  dragging = false;
};

sliderDot.addEventListener("mousedown", sliderStart);
sliderDot.addEventListener("mousemove", sliderDragging);
document.addEventListener("mouseup", sliderDragEnd);
