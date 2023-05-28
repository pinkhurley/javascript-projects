let menuList = document.querySelectorAll(".menu-bar ul li:not(.notactive"),
  sections = document.querySelectorAll("section.box"),
  homeSection = document.querySelector(".home"),
  homeVideo = document.querySelector(".home video"),
  friendsVideos = document.querySelector(".friends video");

menuList.forEach((li) => {
  li.addEventListener("click", (e) => {
    menuList.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    document
      .querySelector("." + e.currentTarget.dataset.sec)
      .classList.add("active");

    e.currentTarget.dataset.sec === "home"
      ? homeVideo.play()
      : homeVideo.pause();
    e.currentTarget.dataset.sec === "friends"
      ? friendsVideos.play()
      : friendsVideos.pause();
  });
});

homeSection.classList.contains("active") ? homeVideo.play() : homeVideo.pause();
