// JS của chữ
window.onload = highlightHomePage;
function highlightHomePage() {
  const homeLink = document.querySelector("#Home");
  homeLink.style.color = "#d64646";
}

// JS cua slider
const iconNext = document.querySelector(".slider-icon-next");
const iconPrev = document.querySelector(".slider-icon-prev");
const sliderList = document.querySelector(".slider-list");
const sliderItems = document.querySelectorAll(".slider-item");

iconNext && iconNext.addEventListener("click", handleClickIconNext);
function handleClickIconNext() {
  const WidthOfScroll = sliderItems[1].clientWidth;

  const MaxWidthOfScroll = (sliderItems.length - 1) * WidthOfScroll;

  /*Code for button slider right */
  if (sliderList.scrollLeft < MaxWidthOfScroll) {
    iconPrev.style.display = "block";
    sliderList.scrollLeft += WidthOfScroll;
  }
  if (sliderList.scrollLeft > MaxWidthOfScroll - WidthOfScroll)
    iconNext.style.display = "none";
  // console.log(sliderList.scrollLeft, MaxWidthOfScroll - WidthOfScroll);

  /*Code for button slider left */
}
iconPrev && iconPrev.addEventListener("click", clickPrev);
function clickPrev() {
  const WidthOfScroll = sliderItems[1].clientWidth;

  const MinWidthOfScroll = 0;
  if (sliderList.scrollLeft > MinWidthOfScroll) {
    sliderList.scrollLeft -= WidthOfScroll;
  }
  if (sliderList.scrollLeft <= MinWidthOfScroll) {
    iconPrev.style.display = "none";
    iconNext.style.display = "block";
  }
}
