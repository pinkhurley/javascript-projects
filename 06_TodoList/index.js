/*
需求：
    1、添加按钮，添加show 子div节点
        将input中的值作为文本，还有remove节点
    2、remove节点删除div节点
    3、删除全部 删除show所有的子节点
    4、将show子节点的个数进行统计，每一次新增删除操作都会更新
实现：
    1、使用event监听点击时间 className 进行定位

*/

const addBtn = document.querySelector(".add");

class Todos {
  constructor(ele) {
    this.ele = document.querySelector(ele);
    this.todoList = [];
    this.resolvedList = [];
    this.input = this.ele.querySelector(".input");
    this.showBox = this.ele.querySelector(".show");
    this.resolvedBox = this.ele.querySelector(".resolved-box");

    this.init();
    this.bindEvent();
  }
  init() {
    if (this.todoList.length < 1) {
      this.showBox.innerHTML = `<h3> no lists.</h3>`;
    }
    if (this.resolvedList.length < 1) {
      this.resolvedBox.innerHTML = `<h3> no resolved lists.</h3>`;
    }
  }

  // 新增todolist
  setItem() {
    this.showBox.innerHTML = "";
    const frag = document.createDocumentFragment();
    for (let i = 0; i < this.todoList.length; i++) {
      const node = document.createElement("div");
      node.className = "item show-item";
      node.innerHTML = `
        <i class="ri-checkbox-blank-circle-line"></i>
          <span>${this.todoList[i]}</span>
        `;
      node.addEventListener("click", () => {
        this.resolvedItem(this.todoList[i]);
      });
      node.dataset.index = i;
      frag.appendChild(node);
    }

    // frag.innerHTML = this.todoList
    //   .map(
    //     (list, index) =>
    //       `<div class="item show-item" dateset-index=${index}>
    //     <i class="ri-checkbox-blank-circle-line"></i>
    //     <span>${list}</span>
    //   </div>`
    //   )
    //   .join("");

    // generate the list
    this.showBox.appendChild(frag);
  }

  setResolvedItem() {
    this.resolvedBox.innerHTML = "";
    const frag = document.createDocumentFragment();
    for (let i = 0; i < this.resolvedList.length; i++) {
      const node = document.createElement("div");
      node.className = "item resolved-item";
      node.innerHTML = `
        <i class="ri-checkbox-circle-line"></i>
          <span>${this.resolvedList[i]}</span>
        `;

      node.dataset.index = i;
      frag.appendChild(node);
    }

    this.resolvedBox.appendChild(frag);
  }
  emptyTodoList() {
    this.showBox.innerHTML = `<h3> no lists.</h3>`;
    this.todoList = [];
  }
  // 完成待办，待办列表减少，解决列表增加
  resolvedItem(item) {
    this.todoList = this.todoList.filter((list) => item !== list);
    if (this.todoList.length < 1) {
      this.emptyTodoList();
    } else {
      this.setItem();
    }

    this.resolvedList = [item, ...this.resolvedList];
    this.setResolvedItem();
  }

  bindEvent() {
    this.ele.addEventListener("click", (e) => {
      e = e || window.event;

      const target = e.target || e.srcEvent;

      if (target.className === "add btn") {
        var inputValue = this.input.value;
        if (inputValue.length < 1) return;

        this.todoList = [inputValue, ...this.todoList];
        this.setItem();

        // clear input value
        this.input.value = "";
      }

      if (target.className === "removeall-btn btn") {
        this.emptyTodoList();
      }
    });
  }
}

new Todos(".container");
