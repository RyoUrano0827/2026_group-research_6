const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg"
];

let index = 0;
const slider = document.getElementById("slider");

const displayTime = 3000; // 表示時間（5秒）
const fadeTime = 1000;    // フェード時間（1秒）

setInterval(() => {
  slider.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % images.length;
    slider.src = images[index];
    slider.classList.remove("fade-out");
  }, fadeTime);

}, displayTime);