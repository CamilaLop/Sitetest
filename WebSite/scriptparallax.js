let leaf = document.getElementById("leaf");
let text = document.getElementById("text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  leaf.style.top = value * -3.5 + "px";
  leaf.style.left = value * 3.5 + "px";
});
