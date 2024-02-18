export let cart = JSON.parse(localStorage.getItem('cart'));
 
if(!cart) {
  cart = [];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (bichlegNumber === cartItem.bichlegNumber) {
      matchingItem = cartItem;
    }
  });


  saveToStorage();
}