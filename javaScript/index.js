//Variables
const url = 'https://challengebsale-backend.herokuapp.com/api/products'
const products = document.querySelector('#products')
const searchBarInput = document.querySelector('#input')
//Event
document.addEventListener('DOMContentLoaded', getProducts)

//Functions
function getProducts(){
    fetch(url)
    .then( resp => resp.json())
    .then( (data) => showProducts(data))
}
// All products 
const showProducts = (data) => {

  $('.product-card').remove();

  const contDiv = document.querySelector('#products');


  data.forEach(({ name, url_image, price, discount }) => {
    const productDiv = document.createElement('div');

    const cardDivClass = [
      'col-lg-6',
      'col-md-8',
      'col-sm-7',
      'mb-3',
      'product-card',
    ];

//classes to card 
productDiv.classList.add(...cardDivClass);

productDiv.innerHTML = 
`<div class="card h-100 bg-light">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
       <div class="col-md-4">
        <img class="card-img-top" src="${
         url_image == '' || url_image == null
         ? `https://www.cuestalibros.com/content/images/thumbs/default-image_550.png`
         : url_image
          }" alt="NotFound" />
      </div>
    <div class="col-md-8">
     <div class="card-body">
     ${
      discount > 0
        ? `<span class="badge text-danger position-relative top-100 start-100 translate-middle" >En OFERTA por tiempo limitado!</span>
        <h6 class="fw-bolder">${name.slice(0, 20)}...><span class="badge bg-success text-white" > ${discount}%Off</span></h6>
        `
        : 
      `<h6 class="fw-bolder">${name}</h6>`
    }  
      ${
          discount > 0
            ? ` <h6 class="text-decoration-underline">$${
                ((100 - discount) * price) / 100 
              }<span class="ml-20 badge text-white bg-success m-2 p-1"> Ahora</span> </h6>
              <span class="text-muted text-decoration-line-through">$${price}</span>
              <span class="ml-20 badge text-white bg-danger p-1"> Antes</span>`
            :`<h5 class="text-decoration-line-through">$${price}</h5>`
        }
         </div>
      </div>
    </div>
  </div>
    `;
    contDiv.appendChild(productDiv)
  });
}

//searchBar
form.addEventListener('submit', searchProduct)


function searchProduct(e){

  e.preventDefault()

  const input = searchBarInput.value.trim()

  fetch(`${url}/product?s=${input}`)
  .then( resp => resp.json())
  .then( (data) => showProducts(data))
  
  if(!input) {
   return alert('Escribir el nombre de un procuto para una correcta busqueda')
  }
  if(input.length > 15){
    alert('El nombre del producto ingresado supera el maximo de carateres')
    return getProducts()
  }
  let correctInput = /^[a-zA-Z ]+$/;
  if(!input.match(correctInput)){
    alert('El nombre ingresado cotiene caracteres incorrectos para la busqueda')
    return getProducts()
  }
  form.reset();
}

//products by category
function productsByCategory(category) {
  fetch(`${url}/category?c=${category}`)
  .then( resp => resp.json())
  .then( (data) => showProducts(data))
}
