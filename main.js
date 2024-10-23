import { setInLocalStorage } from "./src/persistence/localstorage.js";
import { renderCategories } from "./src/services/categories.js";
import './style.css';

renderCategories();


const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
  openModal();
});

// POPUP

const buttonCancel = document.getElementById("buttonCancel");
buttonCancel.addEventListener("click", () => {
  closeModal();
});

const openModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";
};

const closeModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
};

const buttonSave = document.getElementById("buttonSave");
buttonSave.addEventListener("click", () => {
  handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = () => {
  const inputName = document.getElementById("inputName").value;
  const inputImg = document.getElementById("inputImg").value;
  const inputNumber = document.getElementById("inputNumber").value;
  const categoria = document.getElementById("categoria").value;

  let object = {
    id: new Date().toISOString(),
    name: inputName,
    img: inputImg,
    number: inputNumber,
    category: categoria
  };
  setInLocalStorage(object);

  console.log(object);
  //closeModal();
};