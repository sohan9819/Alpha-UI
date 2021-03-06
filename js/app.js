/* ########## Preloader ########## */
const loader = document.querySelector("#preloader");
const alphaMain = document.querySelector(".alpha");

alphaMain.style.display = "none";

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    alphaMain.style.display = "";
  }, 2000);
});

/* ########## CODE BOXS ########## */
hljs.highlightAll();

/* ########## CARD OPTIONS ########## */
const card__option = document.querySelector("#card__option");
const card__layout = document.querySelector(".card");

console.log(card__layout, card__option);

card__option.addEventListener("change", (e) => {
  console.log(e.target.value);
  card__layout.classList = [];

  card__layout.classList.add("card");
  card__layout.classList.add(`${e.target.value}`);
});

/* ########## URL HANDLER ########## */
document.querySelectorAll("a").forEach(function (current) {
  if (!current.hash) return;
  if (current.origin + current.pathname != self.location.href) return;
  (function (anchorPoint) {
    if (anchorPoint) {
      current.addEventListener(
        "click",
        function (e) {
          anchorPoint.scrollIntoView({ behavior: "smooth" });
          e.preventDefault();
        },
        false
      );
    }
  })(document.querySelector(current.hash));
});
