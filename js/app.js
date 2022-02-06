const card__option = document.querySelector("#card__option");
const card__layout = document.querySelector(".card");

console.log(card__layout, card__option);

card__option.addEventListener("change", (e) => {
  console.log(e.target.value);
  card__layout.classList = [];

  card__layout.classList.add("card");
  card__layout.classList.add(`${e.target.value}`);
});
