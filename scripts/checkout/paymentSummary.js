import {cart} from '../../data/cart.js'; 
import {getProduct} from '../../data/products.js'; 
import {getDeliveryOption} from '../../data/deliveryOptions.js';


export function renderPaymentSummary(){
  let productPrice = 0;
  let shippingPrice = 0; 

  cart.forEach((cartItem) =>{
    const product = getProduct(cartItem.productId);

    productPrice += product.price * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPrice += deliveryOption.price;


  });

  //const totalBeforeTax= productPrice + shippingPrice;
  //const taxPrice=  totalBeforeTax * 0.1;
  //const total = totalBeforeTax + taxPrice;
  const total = productPrice + shippingPrice;

  const paymentSummaryHTML = `
      <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">₹${productPrice.toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">₹${shippingPrice.toFixed(2)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">₹${total.toFixed(2)}</div>
          </div>

          <button class="place-order-button button-primary js-place-order>
            Place your order
          </button>

  
    `;




  document.querySelector('.js-payment-summary')
    .innerHTML= paymentSummaryHTML;
  
  /*
    document.querySelector('.js-place-order')
    .addEventListener('click', async () =>{
      const response = await fetch('https://supersimpledbackend.dev/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          cart: cart

        })

      });
      const order = await response.json();
      console.log(order);
    });
  */
 
}