const cursor = document.querySelector("#cursor");
const acursor = document.querySelector(".section-qrcode");

acursor.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 75) + "px; left: " + (e.pageX - 75) + "px;"
  );
});

acursor.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
