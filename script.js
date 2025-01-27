const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const img = document.querySelector("img");
const navDotsContainer = document.querySelector("#nav-dots");
const navDots = document.querySelectorAll("#nav-dots circle");

const imageUrls = [
  "imageOne.jpg",
  "imageTwo.jpg",
  "imageThree.jpg",
  "imageFour.jpg",
  "imageFive.jpg",
];

let i = 0;
let j = 0;

function cycleSlideshow() {
  for (let k = 1; k <= 6; k++) {
    setTimeout(() => {
      j++;
      if (j == 6) {
        j = 0;
        i++;
        if (i == 5) {
          i = 0;
        }
        img.src = "./images/" + imageUrls[i];
        navDots.forEach((dot) => (dot.style.fill = "grey"));
        //navDots[i-1].style.fill = 'grey';
        navDots[i].style.fill = "black";
        cycleSlideshow();
      }
    }, k * 1000);
  }
}

cycleSlideshow();

img.src = "./images/" + imageUrls[i];
navDots[i].style.fill = "black";

leftArrow.addEventListener("click", () => {
  if (i == 0) {
    i = 5;
  }
  i--;
  //j = 0;
  img.src = "./images/" + imageUrls[i];
  navDots.forEach((dot) => (dot.style.fill = "grey"));
  navDots[i].style.fill = "black";
});

rightArrow.addEventListener("click", () => {
  if (i == 4) {
    i = -1;
  }
  i++;
  //j = 0;
  img.src = "./images/" + imageUrls[i];
  navDots.forEach((dot) => (dot.style.fill = "grey"));
  navDots[i].style.fill = "black";
});

navDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    img.src = "./images/" + imageUrls[dot.dataset.label];
    console.log(dot.dataset.label);
  });
});
