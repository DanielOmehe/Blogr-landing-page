const menuToggleBtn = document.querySelector(".menu-toggle-btn");
const mobileMenu = document.querySelector(".blogr-menu");

let isOpen = false;
menuToggleBtn.addEventListener("click", (e) => {
  if (!isOpen) {
    isOpen = true;
    menuToggleBtn.innerHTML = `<img src="images/icon-close.svg" alt="icon-close" />`;
    mobileMenu.classList.add('active');
  } else {
    isOpen = false;
    menuToggleBtn.innerHTML = `<img src="images/icon-hamburger.svg" alt="icon-hamburger" />`;
    mobileMenu.classList.remove('active');
  }
});

const mobileMenuItems = document.querySelectorAll(".blogr-menu-item");

mobileMenuItems.forEach((item, indx) => {
  item.addEventListener("click", () => {
    mobileMenuItems.forEach((item) => {
      item.firstElementChild.nextElementSibling.classList.remove("active");
    });

    item.firstElementChild.nextElementSibling.classList.toggle("active");
  });
});

const navItems = document.querySelectorAll(".blogr-navItem");

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    navItems.forEach((item) => {
      item.firstElementChild.nextElementSibling.classList.remove("active");
    });

    item.firstElementChild.nextElementSibling.classList.remove("active");

    if (!item.firstElementChild.nextElementSibling.classList.contains("active"))
      item.firstElementChild.nextElementSibling.classList.add("active");
  });
});
