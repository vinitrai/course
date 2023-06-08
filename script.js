const menu = document.querySelector(".top--nav--menu");
const faqContainer = document.querySelector(".faq--container");

//menu open close
menu.addEventListener("click", function () {
  const navUl = document.querySelector(".top--nav--ul");
  navUl.classList.toggle("hide--item");
});

//faq open close
faqContainer.addEventListener("click", function (e) {
  const elem = e.target;
  if (elem.classList.contains("faq--btn")) {
    const elemSibling = elem.parentElement.nextElementSibling;
    elemSibling.classList.toggle("hide--item");
  }
});
