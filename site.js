// Fix Missing navbar height due to fixed position
$("nav.navbar.fixed").each(function () {
  let next = $(this).next();
  next.css(
    "padding-top",
    `calc(${next.css("padding-top")} + ${$(this).height()}px)`
  );
});

$(".expand-menu").click(function (ev) {
  let ul = $(this).next("ul");
  if (ul.css("display") === "flex") {
    ul.css("display", "none");
  } else {
    ul.css("display", "flex");
  }
});
