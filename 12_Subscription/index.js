const slider = document.querySelector(".slider");
const sliderInner = document.querySelector(".slider-inner");
const arrowBtn = document.querySelectorAll(".main .btn");
const silderChildrens = [...sliderInner.children];

const itemData = [
  {
    id: 1,
    avatar:
      "https://pic1.zhimg.com/80/v2-c29322edcd03ead5207049b44abad0d8_720w.webp",
    name: "Nina Valentine",
    profession: "3D artist",
  },
  {
    id: 2,
    avatar:
      "https://pic3.zhimg.com/80/v2-698a5ea814e785a2a7f1c00237c38b6e_720w.webp",
    name: "Ludwig Lagos",
    profession: "Illustrator",
  },
  {
    id: 3,
    avatar:
      "https://pic2.zhimg.com/80/v2-19deee716394103b8375712f39282c85_720w.webp",
    name: "Nina Valentine",
    profession: "3D artist",
  },
  {
    id: 4,
    avatar:
      "https://pic4.zhimg.com/80/v2-eef0f2120c4ea3c371c2b64f8b8de45f_720w.webp",
    name: "Nina Valentine",
    profession: "3D artist",
  },
  {
    id: 5,
    avatar:
      "https://pic3.zhimg.com/80/v2-e6b878131259e256f4b0ef8ac5fd926e_720w.webp",
    name: "Nina Valentine",
    profession: "3D artist",
  },
  {
    id: 6,
    avatar:
      "https://pic2.zhimg.com/80/v2-371f405f16926b65e328d4aed7c6fc9d_720w.webp",
    name: "Nina Valentine",
    profession: "3D artist",
  },
  {
    id: 7,
    avatar:
      "https://pic1.zhimg.com/80/v2-888e35d434fd447c0f9b6c3c65183788_720w.webp",
    name: "Nina Valentine",
    profession: "3D artist",
  },
];

const generatorItem = () => {
  const drag = document.createDocumentFragment();

  for (const item of itemData) {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
    <img
        class="avatar"
        src="${item.avatar}"
        alt=""
        />
        <p class="name">${item.name}</p>
        <p class="profession">${item.profession}</p>
        <button class="view-btn">View content</button>
    `;
    drag.appendChild(div);
  }

  sliderInner.appendChild(drag);
};

generatorItem();

const btnCLick = () => {
  const firstItemWidth = sliderInner.querySelector(".item").offsetWidth;
  arrowBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let inter =
        btn.id === "left" ? -firstItemWidth - 16 : firstItemWidth + 16;
      console.log("偏移距离：", inter);
      console.log("原来的距离：", sliderInner.scrollLeft);
      sliderInner.scrollLeft += inter;
      console.log("现在的距离", sliderInner.scrollLeft);
    });
  });
};

btnCLick();
