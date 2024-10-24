import { setInLocalStorage } from "./src/persistence/localstorage.js";
import { renderCategories } from "./src/services/categories.js";
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


const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
  openModal();
});

// POPUP

const buttonCancel = document.getElementById("buttonCancel");
buttonCancel.addEventListener("click", () => {
  closeModal();
});

export const openModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";
  console.log("El producto es", productoActivo);
  if (productoActivo) {
    const nombre = document.getElementById("inputName");
    const imagen = document.getElementById("inputImg");
    const precio = document.getElementById("inputNumber");
    const category = document.getElementById("categoria");
    imagen.value = productoActivo.img;
    precio.value = productoActivo.number;
    nombre.value = productoActivo.name;
    category.value = productoActivo.category;
  }

};

export const closeModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
  resetModal();
};

const resetModal = () => {
  const nombre = document.getElementById("inputName");
  const imagen = document.getElementById("inputImg");
  const precio = document.getElementById("inputNumber");
  const category = document.getElementById("categoria");
  imagen.value = "";
  precio.value = 0;
  nombre.value = "";
  category.value = "Seleccione una categoría";
}

const buttonSave = document.getElementById("buttonSave");
buttonSave.addEventListener("click", () => {
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
