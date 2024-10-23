export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    }
    return [];
};

export const setInLocalStorage = (product) => {
    let productsInLocal = handleGetProductLocalStorage();
    const existingIndex = productsInLocal.findIndex((productsLocal) => productsLocal.id === product.id);
    if (existingIndex !== -1) {
        productsInLocal[existingIndex] = product;
    } else {
        productsInLocal.push(product);
    }
    localStorage.setItem("products", JSON.stringify(productsInLocal));
}