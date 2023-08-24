const natureContainer = document.getElementById('nature-container')
const rainContainer = document.getElementById('rain-container')
const coffeShopContainer = document.getElementById('coffe-shop-container')
const fireplaceContainer = document.getElementById('fireplace-container')

const natureCard = document.getElementById('nature')
const rainCard = document.getElementById('rain-day')
const coffeShopCard = document.getElementById('coffe-shop')
const fireplaceCard = document.getElementById('fireplace')



natureContainer.addEventListener('click', (event) => {
  natureCard.classList.toggle('active')
})

rainContainer.addEventListener('click', (event) => {
  rainCard.classList.toggle('active')
})

coffeShopContainer.addEventListener('click', (event) => {
  coffeShopCard.classList.toggle('active')
})

fireplaceContainer.addEventListener('click', (event) => {
  fireplaceCard.classList.toggle('active')
})