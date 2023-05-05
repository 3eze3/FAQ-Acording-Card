const $titles = Array.from(document.querySelectorAll(".accordion__question"));
const $icons = Array.from(document.querySelectorAll(".accordion__arrow"));
const $content = document.querySelectorAll(".accordion__description");
const $head = document.querySelectorAll(".accordion__head");
$head.forEach((head, index) => {
  head.addEventListener("click", () => {
    const isActive = $content[index].classList.contains(
      "accordion__description--active"
    );
    $content.forEach(cont =>
      cont.classList.remove("accordion__description--active")
    );
    $titles.forEach(title =>
      title.classList.remove("accordion__question--active")
    );
    $icons.forEach(icon => icon.classList.remove("accordion__arrow--active"));

    if (!isActive) {
      $titles[index].classList.add("accordion__question--active");
      $icons[index].classList.add("accordion__arrow--active");
      $content[index].classList.add("accordion__description--active");
    }
  });
});
