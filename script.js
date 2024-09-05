let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let scrollTopBtn = document.getElementById("scroll-top");

/* SideMenu Toggle */
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

let header = document.querySelector("header");
window.onscroll = () => {
  /* Sticky Header */
  let pos = document.documentElement.scrollTop;
  if (pos > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  /* Scroll Top Button */
  if (pos > 300) {
    scrollTopBtn.style.display = "grid";
  } else {
    scrollTopBtn.style.display = "none";
  }

  scrollTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxrwwWMkxiLE45uX0MQCnbRmC_qPh91bWxb7RClEV8IIS233WAQmkBvv2F2aqHryGRPeQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
