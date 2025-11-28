function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  
  if (currCount === 10) return;
  
  currCount++;
  
  countEl.textContent = `${currCount}/10`;
}

const happyBtn = document.querySelector("#happy-btn");
const confusedBtn = document.querySelector("#confused-btn");
const sadBtn = document.querySelector("#sad-btn");
const lovingBtn = document.querySelector("#loving-btn");
happyBtn.addEventListener("click", () => updateCount(happyBtn));
confusedBtn.addEventListener("click", () => updateCount(confusedBtn));
sadBtn.addEventListener("click", () => updateCount(sadBtn));
lovingBtn.addEventListener("click", () => updateCount(lovingBtn));

