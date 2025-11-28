let btns = document.querySelectorAll(".favorite-icon");

btns.forEach(each => {
  each.addEventListener("click", () => {
    if (each.classList.contains("filled")) {
      each.classList.remove("filled");
      each.innerHTML = "&#9825;";
    } else {
      each.classList.add("filled");
      each.innerHTML = "&#10084;";
    }
  });
});
