import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductLocalStorage();
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(inputHeader.value));
    handleRenderList(filteredProducts);
};