const searchInput = document.querySelector(".searchbar");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length === 6) {
    alert("Thanks for entering the pincode. We will check if service is available in your area.");
  }
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeBtn.textContent = "Light Mode";
    themeBtn.style.backgroundColor = "white";
    themeBtn.style.color = "black";
  } else {
    themeBtn.textContent = "Dark Mode";
    themeBtn.style.backgroundColor = "black";
    themeBtn.style.color = "white";
  }
});