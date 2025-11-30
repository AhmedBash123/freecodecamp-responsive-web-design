/*
const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C"
    "#616A6B"
    "#4A235A"
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];
  
  function getRandomIndex() {
    const randomIndex = darkColorsArr.length * math.random();
    return randomIndex;
  }
  console.log(getRandomIndex())
  
  const body = document.queryselector("body");
  const bgHexCodeSpanElement = document.querySelector("bg-hex-code");
  console.log(bgHexCodeSpanElement)
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#click-btn");
  console.log(btn)
  
  btn.addEventListener("click", changeBackgroundColor());
*/  
// to this

const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020"
];

function getRandomIndex() {
  return Math.floor(Math.random() * darkColorsArr.length);
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
const btn = document.querySelector("#btn");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

btn.addEventListener("click", changeBackgroundColor);
