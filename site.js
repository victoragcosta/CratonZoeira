let observer = new ResizeObserver(function (entries) {
  for (let entry of entries) {
    entry.target.handleResize(entry);
  }
});

let toggleNavbarList = function (ev) {
  let navbar = $(this).parent("nav.navbar");
  let ul = $(this).nextAll("ul");

  navbar.toggleClass("shrunk");
  ul.slideToggle();
};

function initNavbar() {
  let next = $("nav.navbar.fixed").next();
  next[0].originalPaddingTop = next.css("padding-top");

  $("nav.navbar.fixed").each(function () {
    this.handleResize = function (entry) {
      // Fix Missing navbar height due to fixed position
      let next = $(this).next();
      next.css(
        "padding-top",
        `calc(${next[0].originalPaddingTop} + ${$(this).height()}px)`
      );
    };

    observer.observe(this, {
      attributes: true,
    });

    // Hide lists
    $(".expand-menu").click(toggleNavbarList);
    let viewportWidth = window.innerWidth;
    if (viewportWidth < 768 && $(this).hasClass("shrunk")) {
      $(".expand-menu").click();
      $(this).addClass("shrunk");
    }
  });

  $(window).resize(function () {
    $("nav.navbar").each(function () {
      // Show list when width big enough and hide if necessary when width shrinks
      let viewportWidth = window.innerWidth;
      let ul = $(this).children("ul");
      if (viewportWidth < 768) {
        // vertical mode
        console.log("aha2");
        if ($(this).hasClass("shrunk")) {
          console.log("aha");
          ul.hide();
        }
      } else {
        // horizontal mode
        ul.show();
      }
    });
  });
}

$(document).ready(function () {
  if ($("nav.navbar.fixed")[0]) {
    initNavbar();
  }
});
