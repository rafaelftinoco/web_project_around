const editbtn = document.getElementById("edit-button");
const closepopupbtn = document.getElementById("popup-close-btn");
const editPopup = document.getElementById("editpopup");
const overlay = document.getElementById("overlay");
const form = document.getElementById("popup-form");
const inputname = document.getElementById("popup-input-name");
const inputabtme = document.getElementById("popup-input-about-me");
const profileName = document.querySelector(".profile__name");
const profileabtme = document.querySelector(".profile__subheading");
const submitbtn = document.getElementById("popup-submit-button");
const addPopup = document.querySelector("#addpopup");
const addPopupBtn = document.querySelector("#add-button");
const addPopupCloseBtn = document.querySelector("#addpopup-close-btn");
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
const cardsContainer = document.querySelector(".cards");
const addbtn = document.getElementById("add-button");
const cardimg = document.querySelector(".card__image");

function openPopup(popupElement) {
  popupElement.classList.add("popup__opened");
  overlay.classList.add("overlay__opened");
}
function closePopup(popupElement) {
  popupElement.classList.remove("popup__opened");
  overlay.classList.remove("overlay__opened");
}
editbtn.addEventListener("click", () => openPopup(editPopup));
closepopupbtn.addEventListener("click", () => closePopup(editPopup));
addPopupBtn.addEventListener("click", () => openPopup(addPopup));
addPopupCloseBtn.addEventListener("click", () => closePopup(addPopup));

function editUserInfo(event) {
  event.preventDefault();
  profileName.textContent = inputname.value;
  profileabtme.textContent = inputabtme.value;
  closePopup(editPopup);
}
form.addEventListener("submit", editUserInfo);

addbtn.addEventListener("click", openPopup);
function createCard(card) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-button");
  cardElement.querySelector(".card__name").textContent = card.name;
  cardElement.querySelector(".card__image").setAttribute("src", card.link);
  cardElement.querySelector(".card__image").setAttribute("alt", card.name);
  cardElement
    .querySelector(".card__remove-btn")
    .addEventListener("click", () => {
      cardElement.remove();
    });
  likeButton.addEventListener("click", () =>
    likeButton.classList.toggle("card__like-button-active")
  );
  const opnImagePopup = cardElement.querySelector(".card__image");
  opnImagePopup.addEventListener("click", () => {
    document.querySelector(".popup__photo").setAttribute("src", card.link);
    document.querySelector(".popup__name").textContent = card.name;
    openPopup(document.querySelector("#imagepopup"));
    const imagePopup = document.querySelector("#imagepopup");
    const closeImgPopupBtn = document.querySelector("#imgpopup-close-btn");
    closeImgPopupBtn.addEventListener("click", () => closePopup(imagePopup));
  });

  return cardElement;
}
initialCards.forEach((card) => {
  const newCard = createCard(card);
  cardsContainer.append(newCard);
});

// Função Criar Novo Card
const addcardname = document.querySelector("#addpopup-input-name");
const addcardurl = document.querySelector("#addpopup-input-url");
const addform = document.querySelector("#addpopup-form");

function insertCardWithImageURL(event) {
  event.preventDefault();
  // pegar os dados que o usuario adicionou nos inputs
  const cardData = {
    name: addcardname.value,
    link: addcardurl.value,
  };
  // chamar o metodo de criar cartão passando os dados que o usuario adicionou nos inputs
  const newCard = createCard(cardData);
  // pegar o cartão criado e adicionar na sessão de cartões do html
  cardsContainer.prepend(newCard);
  // limpar os inputs após o submit
  addcardname.value = "";
  addcardurl.value = "";
  // fechar popup
  closePopup(addPopup);
}
addform.addEventListener("submit", insertCardWithImageURL);
//
