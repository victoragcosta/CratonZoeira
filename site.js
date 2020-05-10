function fixNavbar() {
  let navbar = document.querySelectorAll("nav.navbar.fixed");
  navbar.forEach((el, key, parent) => {
    console.log(el.clientHeight);
    let afterNavbar = el.nextElementSibling;
    let marginTop = getComputedStyle(afterNavbar).marginTop;
    console.log(marginTop);
    afterNavbar.style.marginTop = `calc(${marginTop} + ${el.clientHeight}px)`;
  });
}
fixNavbar();
