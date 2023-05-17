const usersBox = document.querySelector(".users");
const searchBtn = document.querySelector(".sBtn");
const searchInput = document.querySelector("#search");

// users data
const userData = [
  {
    id: 1,
    avatar: "https://image.meiye.art/pic_1628418647188",
    name: "Lelah Nichols",
    addr: "Troy.MI",
    tags: ["clothes", "stem"],
  },
  {
    id: 2,
    avatar:
      "https://image.meiye.art/pic_lKzQ1wamQMgguzy1CP6Yc?imageMogr2/thumbnail/470x/interlace/1",
    name: "Jesus Weiss",
    addr: "Fort Worth, TX",
    tags: ["headset", "gadget", "speed", "winter"],
  },
  {
    id: 3,
    avatar: "https://image.meiye.art/pic_aLit96yz_oGgGRDAY_pUW",
    name: "Annie Rice",
    addr: "Austin, TX",
    tags: ["road", "moutntain", "trip", "earth", "nature"],
  },
  {
    id: 4,
    avatar: "https://image.meiye.art/pic_1631505679133MY7S04EjmHH3aGQ8kHQAQ",
    name: "Robert Brower",
    addr: "Cincinnati. OH",
    tags: ["Maintenance", "gears", "frames", "repair"],
  },
  {
    id: 5,
    avatar: "https://image.meiye.art/pic_1628418647188",
    name: "Amy Campbell",
    addr: "Warrior.AL",
    tags: ["music", "disks"],
  },
  {
    id: 6,
    avatar: "https://image.meiye.art/pic_1632662358667gwKA2YN-IldQkj58OA8yG",
    name: "Anthny S.Morin",
    addr: "Lyndhurst.NJ",
    tags: ["vintage", "electic"],
  },
];

/// generate tag list
const generateTags = (list) => {
  let itemCon = ``;
  for (const item of list) {
    itemCon += `<div class="tag">${item}</div>`;
  }
  return itemCon;
};

// generate use list
const generateUserList = (userData) => {
  usersBox.innerHTML = "";
  const frag = document.createDocumentFragment();
  for (const item of userData) {
    const user = document.createElement("div");
    user.className = "user";
    user.innerHTML = `
      <img
        src="${item.avatar}"
        alt=""
       />
        <div class="info">
        <div class="name">${item.name}</div>
        <div class="addr">${item.addr}</div>
        <div class="tags">
        ${generateTags(item.tags)}
        </div>
        </div>
      `;

    frag.appendChild(user);
  }

  usersBox.appendChild(frag);
};

generateUserList(userData);

// filter user according username
const filterUserList = () => {
  const inputs = searchInput.value;
  if (inputs.trim().length === "") return;

  let newUserData = userData.filter((item) => {
    let username = item.name;
    return username.toLocaleLowerCase().includes(inputs.trim().toLowerCase());
  });

  return newUserData;
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generateUserList(filterUserList());
});
