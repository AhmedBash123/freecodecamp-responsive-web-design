const theParagraph = document.getElementById("char-count");
const theInput = document.getElementById("text-input");
const maxLength = 50;

theInput.addEventListener("input", () => {
  let text = theInput.value;

  
  if (text.length > maxLength) {
    text = text.slice(0, maxLength);
    theInput.value = text; 
  }

  
  const theNum = text.length;
  theParagraph.textContent = `Character Count: ${theNum}/50`;

  if (theNum === maxLength) {
    theParagraph.style.color = "red";
  } else {
    theParagraph.style.color = "black";
  }
});
