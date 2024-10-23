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
