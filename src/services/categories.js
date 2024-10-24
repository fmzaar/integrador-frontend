import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (category) => {
    const products = handleGetProductLocalStorage();

    switch (category) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Hamburguesas":
            handleRenderList(products.filter((product) => product.category === "Hamburguesas"));
            break;
        case "Papas":
            handleRenderList(products.filter((product) => product.category === "Papas"));
            break;
        case "Gaseosas":
            handleRenderList(products.filter((product) => product.category === "Gaseosas"));
            break;
        case "MayorPrecio":
            handleRenderList(products.filter((product) => product.number > 2000));
            break;
        case "MenosPrecio":
            handleRenderList(products.filter((product) => product.number < 2000));
            break;
        default:
            handleRenderList(products);
            break;
    }
}




export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="MayorPrecio">Mas caras</li>
    <li id="MenosPrecio">Mas  baratas</li> `;
    const liElement = ulList.querySelectorAll("li");
    liElement.forEach((liElement) => {
        liElement.addEventListener("click", () => {
            handleClick(liElement);
        });
    });
    const handleClick = (element) => {
        handleFilterProductsByCategory(element.id);
        liElement.forEach((el) => {
            if (el.classList.contains("liActive")) {
                el.classList.remove("liActive");
            } else {
                if (element === el) {
                    el.classList.add("liActive");
                }
            }
        });
    };
};
