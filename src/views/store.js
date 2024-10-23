import { setProductoActivo } from "../../main";
import { openModal } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";

export const handleGetProductsToStore = () => {

    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};

export const handleRenderList = (products) => {
    const burgers = products.filter((product) => product.category === "Hamburguesas");
    const papas = products.filter((product) => product.category === "Papas");
    const gaseosas = products.filter((product) => product.category === "Gaseosas");

    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `
                <div class="containerTargetItem" id="product-${producto.category}-${index}" class="producto">
                <div>
                    <img src="${producto.img}" />
                </div>
                    <div class="producto__infos">
                        <h2>${producto.name}</h2>
                    </div>
                    <div class="targetProps">
                    <p><b>Precio:</b> $ ${producto.number}</p>
                    </div>
                </div>
                `;
            })
            return `
            <section class="sectionStore">
            <div class="sectionStore__title">
            <h3>${title}</h3>
            </div>
            <div class="containerProductStore">
            ${productosHTML.join("")}
            </div>
            </section>
            `;
        } else {
            return "";
        }
    }

    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;


    const addEvents = (productIn) => {
        if (productIn) {
            productIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.category}-${index}`);

                productContainer.addEventListener("click", () => {
                    setProductoActivo(element);
                    openModal();
                    console.log(element);
                });

            });
        }
    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};
