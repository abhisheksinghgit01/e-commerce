// script.js
document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.getElementById("cart-icon");
    const cartContainer = document.getElementById("cart-container");
    const closeCart = document.getElementById("close-cart");

    cartIcon.addEventListener("click", function() {
        cartContainer.classList.add("open");
    });

    closeCart.addEventListener("click", function() {
        cartContainer.classList.remove("open");
    });
});
