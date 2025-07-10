function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

updateCartCount();