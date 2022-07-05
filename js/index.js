// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  //extraer los valores
  const priceValue = price.innerText;
  const quantityValue = quantity.value;
  //cálculo subtotal
  const subtotalPrice = priceValue * quantityValue;
  //sacar el elemento subtotal
  const subtotal = product.querySelector('.subtotal span');
  //
  subtotal.innerText = subtotalPrice;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((eachProduct) => {
  updateSubtotal(eachProduct);
  });

  // ITERATION 3
  let totalValue = 0
  allProducts.forEach((eachProduct) => {
    totalValue += updateSubtotal(eachProduct)
    return totalValue
  })

  totalValue = document.querySelector("total-value span").innerText
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
