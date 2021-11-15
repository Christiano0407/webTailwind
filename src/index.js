// = Mobile-Menu / Menu Burger =
const menuBtn = document.getElementById(`mobile-menu`);
console.log(menuBtn);
//>>>
menuBtn.addEventListener(`click`, (e) => {
  const menu = document.getElementById(`mobile`);
  menu.classList.toggle(`hidden`);
});
