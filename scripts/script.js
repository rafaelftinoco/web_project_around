const editbtn = document.getElementById("edit-button");
const closepopupbtn = document.getElementById("popup-close-btn");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const form = document.getElementById("popup-form");
const inputname = document.getElementById("popup-input-name");
const inputabtme = document.getElementById("popup-input-about-me");
const profileName = document.querySelector(".profile__name");
const profileabtme = document.querySelector(".profile__subheading");
const submitbtn = document.getElementById("popup-submit-button");

addEventListener("click", function () {
  overlay.removeAttribute("overlay__hidden");
});

addEventListener("DOMContentLoaded", function () {
  function openPopup() {
    popup.style.display = "flex";
    overlay.style.display = "block";
  }
  function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
  }
  editbtn.addEventListener("click", openPopup);
  closepopupbtn.addEventListener("click", closePopup);

  function editUserInfo(event) {
    event.preventDefault();
    profileName.textContent = inputname.value;
    profileabtme.textContent = inputabtme.value;
    closePopup();
  }

  form.addEventListener("submit", editUserInfo);
});
