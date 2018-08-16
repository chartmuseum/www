var body = document.body,
  btnMenu = document.querySelector(".drawer__toggler"),
  sidebar = document.querySelector(".sidebar__wrapper"),
  backdrop = document.querySelector(".backdrop"),
  navLinks = document.querySelectorAll(".nav__link");

function toggleMenu(e) {
  if (window.innerWidth <= 991) {
    if (e.target.dataset.toggle === "dropdown") {
      e.preventDefault();
    } else {
      btnMenu.classList.toggle("active");
      sidebar.classList.toggle("show");
      backdrop.classList.toggle("show");
      body.classList.toggle("noscroll");
    }
  } else {
    return;
  }
};

btnMenu.addEventListener("click", toggleMenu);
navLinks.forEach(function(link) {
  link.addEventListener("click", toggleMenu)
});

var accItem = document.getElementsByClassName("submenu"),
  accHD = document.getElementsByClassName("acrd__item");
for (var i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem(e) {
  var itemClass = this.nextElementSibling.className;
  for (var i = 0; i < accItem.length; i++) {
    accItem[i].className = "nav flex-column submenu close";
    e.preventDefault();
  }
  if (itemClass === "nav flex-column submenu close") {
    this.nextElementSibling.className = "nav flex-column submenu open";
  }
}
