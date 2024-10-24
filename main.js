import { setInLocalStorage } from "./src/persistence/localstorage.js";
import { renderCategories } from "./src/services/categories.js";
import { handleSearchProductByName } from "./src/services/search.js";
import { closeModal, openModal } from "./src/views/modal.js";
import { handleGetProductsToStore } from "./src/views/store.js";
import './style.css';


handleGetProductsToStore();
renderCategories();

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};

export let productoActivo = null;

export const setProductoActivo = (productIn) => {
  productoActivo = productIn;
};


const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
  handleSearchProductByName();
});

const buttonAdd = document.getElementById("buttonAddElement")
buttonAdd.addEventListener("click", () => {
  console.log("Estoy en add");
  openModal();
});

const buttonSave = document.getElementById("buttonSave");
buttonSave.addEventListener("click", () => {
  console.log("Estoy en save");
  handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = () => {
  const nombre = document.getElementById("inputName").value;
  const imagen = document.getElementById("inputImg").value;
  const precio = document.getElementById("inputNumber").value;
  const category = document.getElementById("categoria").value;
  let object = null;
  if (productoActivo) {
    object = {
      id: productoActivo.id,
      name: nombre,
      img: imagen,
      number: precio,
      category: category
    };
  } else {
    object = {
      id: new Date().toISOString(),
      name: nombre,
      img: imagen,
      number: precio,
      category: category
    };
  }

  setInLocalStorage(object);
  handleGetProductsToStore();
  closeModal();
};


