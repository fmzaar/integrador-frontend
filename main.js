import Swal from "sweetalert2";
import { handleGetProductLocalStorage, setInLocalStorage } from "./src/persistence/localstorage.js";
import { renderCategories } from "./src/services/categories.js";
import { handleSearchProductByName } from "./src/services/search.js";
import { closeModal, openModal } from "./src/views/modal.js";
import { handleGetProductsToStore, handleRenderList } from "./src/views/store.js";
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

//De momento todo lo de products se mantiene en main ya que dejan de funcionar cuando los muevo y
//no encontre forma de hacerlo andar de momento.

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
  Swal.fire({
    title: "Guardado!",
    text: "El producto se ha guardado exitosamente.",
    icon: "success"
  });

  setInLocalStorage(object);
  handleGetProductsToStore();
  closeModal();
};

export const handleDeleteProduct = () => {
  Swal.fire({
    title: "Estas seguro?",
    text: "Este cambio no se podra revertir!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const products = handleGetProductLocalStorage();
      const results = products.filter((product) => product.id !== productoActivo.id);
      localStorage.setItem("products", JSON.stringify(results));
      const newProductos = handleGetProductLocalStorage();
      handleRenderList(newProductos);
      closeModal();
      Swal.fire({
        title: "Borrado!",
        text: "El producto ha sido borrado exitosamente",
        icon: "success"
      });
    }
  });

};


