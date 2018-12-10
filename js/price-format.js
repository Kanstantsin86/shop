'use strict';

function getPriceFormatted(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

let buttons = document.getElementsByClassName('add');
let cartCount = document.getElementById('cart-count');
let cartTotalPrice = document.getElementById('cart-total-price');
let totalPrice = 0;
let count = 0;

function add() {
  count++;
  totalPrice += +this.dataset.price;
  let formattedPrice = getPriceFormatted(totalPrice);
  cartCount.innerText = count;
  cartTotalPrice.innerText = formattedPrice;
}

for (let button of buttons) {
  button.addEventListener('click', add);
}