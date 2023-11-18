//js của chọn size
var size = document.querySelectorAll(".shopping-size-list p");

size.forEach((item) => item.addEventListener("click", clickSize));
function clickSize(e) {
  //   console.log(e.target);
  size.forEach((item) => item.classList.remove("click"));
  var input = document.querySelector(".shopping-counter-number  input");
  input.value = 1;
  e.target.classList.add("click");
}

//js của số lượng
const plus = document.querySelector(".shopping-counter-plus");
const minus = document.querySelector(".shopping-counter-minus");
// console.log(plus);
// console.log(minus);
plus.addEventListener("click", clickPlus);
function clickPlus() {
  var input = document.querySelector(".shopping-counter-number  input");
  var value = input.value;
  value++;
  console.log(value);
  input.value = value;
}
minus.addEventListener("click", clickMinus);
function clickMinus() {
  var input = document.querySelector(".shopping-counter-number  input");
  var value = input.value;
  //   value--;
  value <= 1 ? (value = 1) : value--;
  console.log(value);
  input.value = value;
}
//còn pug nhe

//js của sizeTab
const sizeTab = document.querySelector(".shopping-sizeTab");
// console.log(sizeTab);
const link = document.querySelector(".shopping-size span");
console.log(link);
const overlayShopping = document.querySelector(".shopping-overlay");
const exit = document.querySelector(".shopping-sizeTab i");

link.addEventListener("click", clickChooseSize);
function clickChooseSize() {
  // console.log(e.target);
  sizeTab.style.display = "block";
  overlayShopping.style.display = "block";
}
exit.addEventListener("click", clickExit);
overlayShopping.addEventListener("click", clickExit);
function clickExit() {
  sizeTab.style.display = "none";
  overlayShopping.style.display = "none";
}
