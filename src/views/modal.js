import { productoActivo, setProductoActivo } from "../../main";

export const buttonCancel = document.getElementById("buttonCancel");
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
    setProductoActivo(null);
    resetModal();
};

export const resetModal = () => {
    const nombre = document.getElementById("inputName");
    const imagen = document.getElementById("inputImg");
    const precio = document.getElementById("inputNumber");
    const category = document.getElementById("categoria");
    imagen.value = "";
    precio.value = 0;
    nombre.value = "";
    category.value = "Seleccione una categoría";
}

