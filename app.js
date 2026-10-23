const cookiesContainer = document.querySelector("#cookiesContainer");
const cookiesCloseBtn = document.querySelector("#close");
const cookiesOkBtn = document.querySelector("#ok");

let status = localStorage.getItem("status") === "true";

if (status === true) {
  cookiesContainer.classList.add("hidden");
}

cookiesOkBtn.addEventListener("click", () => {
  status = true;
  localStorage.setItem("status", status);
  cookiesContainer.classList.add("hidden");
});
cookiesCloseBtn.addEventListener("click", () => {
  cookiesContainer.classList.add("hidden");
});
