const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

const initSortableList = (e) => {
  e.preventDefault();
  //   获取当前 dragging的元素
  const draggingItem = sortableList.querySelector(".dragging");

  //   获取所有没有 dragging的元素
  const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  console.log(e);
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });
  sortableList.insertBefore(draggingItem, nextSibling);
};

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
