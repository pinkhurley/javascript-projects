// Data

const data = [
  {
    id: 0,
    img: "https://www.starbucks.com.cn/images/products/whole-wheat-walnut-muffin.jpg",
    name: "全麦核桃麦芬",
    description: "口感松软、有弹性多种坚果富有嚼劲星巴克独有配方制作",
    match: "咖啡搭配建议：星巴克®早餐综合咖啡豆 / 星巴克®首选咖啡豆",
    location: "",
  },
  {
    id: 1,
    img: "https://www.starbucks.com.cn/images/products/premium-chocolate-croissant.jpg",
    name: "香浓巧克力可颂",
    description:
      "借鉴传统27层制作工艺采用高品质进口巧克力条作为内馅香味浓郁，酥脆有韧性",
    match: "咖啡搭配推荐：星巴克®危地马拉安提瓜咖啡豆",
    location: "",
  },
  {
    id: 2,
    img: "https://www.starbucks.com.cn/images/products/cinnamon-swirl.jpg",
    name: "旋风玉桂酥",
    description:
      "提子、核桃和玉桂风味平衡搭配口感酥香美味黄油香气、独特的玉桂粉",
    match: "咖啡搭配推荐：星巴克®哥伦比亚咖啡豆",
    location: "",
  },
  {
    id: 3,
    img: "https://www.starbucks.com.cn/images/products/red-bean-oats-scone.jpg",
    name: "红豆燕麦松饼",
    description:
      "口感松软，醇厚的奶香味，再加入红豆沙和红豆，更增加了香甜的味道，同时加入燕麦片，更增加产品的价值。",
    match: "咖啡搭配推荐：馥芮白仅江浙沪门店",
    location: "",
  },
  {
    id: 4,
    img: "https://www.starbucks.com.cn/images/products/american-style-pancakes.jpg",
    name: "美式松饼",
    description:
      "两片轻盈酥松的美式松饼搭配加拿大进口槭树糖浆（枫糖浆），层层甜蜜令人陶醉，带给你超值经典的美式早餐新体验。",
    match: "咖啡搭配推荐：冷萃咖啡 / 美式咖啡",
    location: "",
  },
  {
    id: 5,
    img: "https://www.starbucks.com.cn/images/products/oat-caramel-pudding-bread.jpg",
    name: "燕麦焦糖布丁面包",
    description:
      "当酥脆的面包干搭配绵密的布丁、甜美的焦糖、还有一点点韧性的燕麦，蔓越莓干，提子干让人爱不释口。",
    match: "咖啡搭配推荐：焦糖玛奇朵",
    location: "仅江浙沪门店",
  },
  {
    id: 6,
    img: "https://www.starbucks.com.cn/images/products/raisins-walnut-bread.jpg",
    name: "核桃提子软法面包",
    description: "软法面包体，内含核桃、提子，添加不融芝士，奶香风味浓郁。",
    match: "咖啡搭配推荐：美式咖啡",
    location: "仅江浙沪门店",
  },
  {
    id: 7,
    img: "https://www.starbucks.com.cn/images/products/cinnamon-swirl.jpg",
    name: "旋风玉桂酥",
    description:
      "提子、核桃和玉桂风味平衡搭配口感酥香美味黄油香气、独特的玉桂粉",
    match: "咖啡搭配推荐：星巴克®哥伦比亚咖啡豆",
    location: "",
  },
  {
    id: 8,
    img: "https://www.starbucks.com.cn/images/products/chocolate-muffin.jpg",
    name: "香浓巧克力麦芬",
    description:
      "享受高品质欧洲巧克力的细腻质感星巴克独有美式配方制作巧克力风味浓郁醇正",
    match: "咖啡搭配推荐：星巴克®危地马拉安提瓜咖啡豆",
    location: "",
  },
];

// get element
const listBox = document.querySelector(".lists-box");
const itemDetailBox = document.querySelector(".item-detail");
const btns = document.querySelectorAll(".btn");

let isDragging = false,
  startX,
  startScrollLeft;

data.forEach((item) => {
  //   listBox.innerHTML = "";
  let listEle = `
  <li class="list" data-index='${item.id}'>
    <img
        src="${item.img}"
        alt=""
    />
    <span>${item.name}</span>
    </li>
  `;
  listBox.innerHTML += listEle;
});

const showItem = (data) => {
  let ele = `
    <img
        src="${data.img}"
        alt=""
    />
    <div class="info">
        <h2 class="name">${data.name}</h2>
        <div class="detail">
        <p>
            ${data.description}
        </p>
        <p>${data.match}</p>
        <p>${data.location}</p>
        </div>
    </div>
    `;
  return ele;
};

itemDetailBox.innerHTML = showItem(data[0]);

// bind click event, to change the item pic and info
const lists = document.querySelectorAll(".list");
lists.forEach((l) => {
  l.addEventListener("click", () => {
    // console.log(l.dataset.index);
    itemDetailBox.innerHTML = "";
    itemDetailBox.innerHTML = showItem(data[l.dataset.index]);
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // move item
    const moveWidth =
      btn.className.indexOf("left") > 0
        ? -lists[0].clientWidth
        : lists[0].clientWidth;
    listBox.scrollLeft += moveWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = listBox.scrollLeft;
  listBox.classList.add("dragging");
};

const dragging = (e) => {
  if (!isDragging) return;
  listBox.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  listBox.classList.remove("dragging");
};

listBox.addEventListener("mousedown", dragStart);
listBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
