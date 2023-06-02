// Data
const menu1 = {
  id: 1,
  title: "Frequently asked questions",
  questions: [
    {
      question: "What payment solutions can I choose from?",
      answer: "Apple",
    },
    {
      question: "How does payment via Walley Checkout work?",
      answer:
        "When I was ten I was suddenly confronted with the anguish of moving from the only home I had ever known. My whole life, brief as it was, had been spent in that big old house, gracefully touched with the laughter and tears of four generations.",
    },
    {
      question: "How is my invoice via Walley Check?",
      answer: "Apple",
    },
  ],
};

const menu2 = {
  id: 2,
  title: "Payment and invoice",
  questions: [
    {
      question: "What payment solutions can I choose from?",
      answer: "Mango",
    },
    {
      question: "How does payment via Walley Checkout work?",
      answer:
        "When I was ten I was suddenly confronted with the anguish of moving from the only home I had ever known. My whole life, brief as it was, had been spent in that big old house, gracefully touched with the laughter and tears of four generations.",
    },
    {
      question: "How is my invoice via Walley Check?",
      answer: "Apple",
    },
  ],
};

const menu3 = {
  id: 3,
  title: "Deliveries",
  questions: [
    {
      question: "What payment solutions can I choose from?",
      answer: "Watermello",
    },
    {
      question: "How does payment via Walley Checkout work?",
      answer:
        "When I was ten I was suddenly confronted with the anguish of moving from the only home I had ever known. My whole life, brief as it was, had been spent in that big old house, gracefully touched with the laughter and tears of four generations.",
    },
    {
      question: "How is my invoice via Walley Check?",
      answer: "Apple",
    },
  ],
};

const menus = [menu1, menu2, menu3];

// get Element
const menusBox = document.querySelector(".menus");
const answerBoxTitle = document.querySelector(".answer-box h2");
const questionList = document.querySelector(".lists");

menus.forEach((menu) => {
  let html = `
    <li class="menu" data-index=${menu.id}>
        <i class="ri-information-line"></i>
        <span>${menu.title}</span>
    </li>
    `;
  menusBox.innerHTML += html;
});

const geneQuenEle = (index) => {
  answerBoxTitle.textContent = menus[index].title;

  questionList.innerHTML = "";
  menus[index].questions.forEach((item) => {
    let html = `
    <li class="list">
        <div class="question">
            <span>${item.question}</span>
            <i class="ri-arrow-down-s-line"></i>
        </div>
        <div class="answer">${item.answer}</div>
    </li>
    `;
    questionList.innerHTML += html;
  });

  const quenList = document.querySelectorAll(".list");
  quenList[0].classList.add("active");
  quenList.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
};

geneQuenEle(0);
const menusLists = document.querySelectorAll(".menu");
menusLists[0].classList.add("active");

menusLists.forEach((menu) => {
  menu.addEventListener("click", () => {
    geneQuenEle(menu.dataset.index - 1);
  });
});
