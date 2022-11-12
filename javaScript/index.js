/// VARIABLES ///
// Backend deploy address
// Dirección de implementación de back-end
const url = 'https://challengebsale-backend.herokuapp.com/api/products'
// Selectors to indicate the id in this case, in the html file
const products = document.querySelector('#products')
const searchBarInput = document.querySelector('#input')

// Event // Evento
/*
 Listener that tells the browser to listen for user interaction with the getProducts function as the second parameter
 the getProducts function is explained in the line 20
 The DOMContentLoaded, is executed when the content of the DOM has been completely loaded 
 and is ready to receive Javascript instructions.

 Escuchador que le dice al navegador que escuche la interacción del usuario 
 con la función getProducts como segundo parámetro
 la función getProducts se explica en la línea 20
 El DOMContentLoaded, se ejecuta cuando el contenido del DOM se ha cargado por completo
 y está listo para recibir instrucciones Javascript.
*/
document.addEventListener('DOMContentLoaded', getProducts)

/// FUNCTIONS ///

// Function to get all the products through the Fetch method, handling the response (promise) with the .then method
// Función para obtener todos los productos a través del método Fetch, manejando la respuesta (promesa) con el método .then
function getProducts() {
  fetch(url)
    .then(resp => resp.json())
    .then((data) => showProducts(data))
}
// Function to display the products indicating their styles and composition of your card.
// Función para mostrar los productos indicando sus estilos y composición de su tarjeta.
const showProducts = (data) => {

  // A Jquery method was used to clean the element where the product is to be displayed
  // Se utilizó un método Jquery para limpiar el elemento donde se va a mostrar el producto
  $('.product-card').remove();

  // A selector to indicate the ID of the HTML element
  // Un selector para indicar el ID del elemento HTML
  const contDiv = document.querySelector('#products');

  // forEach loop to iterate the array of products and create a DIV for each one with the characteristics passed by parameter
  // bucle forEach para iterar el arreglo de productos y crear un DIV para cada uno con las características pasadas por parámetro
  data.forEach(({ name, url_image, price, discount }) => {
    const productDiv = document.createElement('div');

    // CLASS
    const productDivClass = [
      'col-lg-6',
      'col-md-8',
      'col-sm-7',
      'mb-3',
      'product-card',
    ];

    // Inserts a class of styles (productDivClass) through the special object and its add method (classList.add)
    // Inserta una clase de estilos (productDive Class) a través del objeto especial y su método add (classList.add)
    productDiv.classList.add(...productDivClass);

    // Then the HTML element is replaced by what is created
    // Entonces el elemento HTML es reemplazado por lo que se crea
    productDiv.innerHTML =
      `
        <div class="card mb-3 h-100 border-light shadow" >
         <div class="row g-0">
          <div class="col-md-4">
           <img class="card-img" src="
            ${url_image == '' || url_image == null
             ? `https://www.bancoprovincia.com.ar/Content/imgs/c_inver01.gif`
             : url_image
      /* Ternary operator where it is said that if the 
         url_image parameter contains an empty string or null it shows the default image 
         with "content not available" or if it contains an image that shows it.
         Operador ternario donde se dice que si el parámetro url_image contiene una cadena vacía o null 
         muestra la imagen por defecto "contenido no disponible", o si contiene una la muestra.
    */
      }" alt="NotFound" />
      </div>
    <div class="col-md-8">
     <div class="card-body">
     ${discount > 0
        ? `<h5 class="text-success m-10">OFERTA!</h5>
        <h6 class="fw-bolder">${name.slice(0, 20)}...><span class="badge bg-success text-white" > ${discount}%Off</span></h6>
        `
        :
        `<h6 class="fw-bolder">${name}</h6>`
      /*
       Ternary operator where it is said that if the discount value is greater than 0, 
       the name is displayed with a span that says Offer and the percentage of discount that the product has, 
       otherwise only the name of the product is displayed.
       Operador ternario donde se dice que si el valor del descuento es mayor a 0 se muestra el nombre con un span 
       que dice "Oferta" y el porcentaje de descuento que tiene el producto, 
       en caso contrario solo se muestra el nombre del producto.
      */
      }  
      ${discount > 0
        ?`<span class=" badge text-white bg-success p-1"> Ahora</span><h6 class="text-decoration-underline">$${((100 - discount) * price) / 100}
         </h6>
         <span class="ml-20 badge text-white bg-danger p-1"> Antes</span>
               <h6 class="text-muted text-decoration-line-through">$${price}</h6>
               `
        : `<h5 class="text-decoration-line-through">$${price}</h5>`
      /*
      Ternary operator where it is said that if the discount is greater than 0, 
      apply a discount percentage mathematical operation to show the price with discount 
      and the price without discount, 
      otherwise only show the price.
      Operador ternario donde se dice que si el descuento es mayor a 0 
      aplicar una operación matemática de porcentaje de descuento para mostrar el precio con descuento 
      y el precio sin descuento, en caso contrario solo mostrar el precio.
       */
      }
         </div>
      </div>
    </div>

 
  `;

    // Insert productDiv inside the container for the DOM
    // Insertar productDiv dentro del container para el DOM
    contDiv.appendChild(productDiv)
  });
}

/// SEARCH BAR ///

//Listener that tells the browser to listen for user interaction with the searchProduct function as the second parameter
//Escuchador que le dice al navegador que escuche la interacción del usuario, con la función searchProduct como segundo parámetro
form.addEventListener('submit', searchProduct)
// Function to obtain products according to the name entered by the user.
// Función para obtener productos de acuerdo al nombre ingresado por el usuario.
function searchProduct(e) {

  // Prevent unnecessary page reload
  // Prevenir la recarga innecesaria de la página
  e.preventDefault()

  // Clean variable of spaces and unnecessary content using Trim method
  // Limpiar la variable de espacios y contenido innecesario usando el método Trim
  // const input = searchBarInput.value.trim() (Sin utilizar para que el usuario escriba con espacios)

  /* 
  Function to obtain the products through the Fetch method, handling the response (promise) with the .then method, 
  indicating the EndPoint of the backend as a parameter con el producto por query-Request.
  
  Función para obtener los productos a través del método Fetch, manejando la respuesta (promise) con el método .then,
  indicando como parámetro el EndPoint del backend con el producto por query-Request.
  */
  fetch(`${url}/product?s=${searchBarInput.value}`)
    .then(resp => resp.json())
    .then((data) => showProducts(data))


  // If there is nothing in the input an alert is sent with an error message
  // Si no hay nada en el input, se muestra una alerta con un mensaje de error.
  if (!searchBarInput.value) {
    return alert('Escribir el nombre de un producto para una correcta busqueda')
  }
  // If the input contains more than 15 characters, an alert is sent with an error message
  // Si el input contiene más de 15 caracteres, se muestra una alerta con un mensaje de error
  if (searchBarInput.value.length > 15) {
    alert('El nombre del producto ingresado supera el maximo de carateres')
    return getProducts()
  }
  // If the input contains illegal characters, an alert is sent with an error message
  // Si el input contiene caracteres no permitidos, se muestra una alerta con un mensaje de error.
  let correctInput = /^[a-zA-Z ]+$/;
  if (!searchBarInput.value.match(correctInput)) {
    alert('El nombre ingresado contiene caracteres incorrectos para la busqueda')
    return getProducts()
  }
  form.reset();

}


//PRODUCTS BY CATEGORY
/*
Function to obtain the products by category to which they correspond through the Fetch method,
handling the response (promise) with the .then method,
indicating the EndPoint of the backend as a parameter with the category by query-Request

Función para obtener los productos por categoría a la que corresponden a través del método Fetch,
manejando la respuesta (promesa) con el método .then,
indicando el EndPoint del backend como parámetro con la categoría por query-Request
*/
function productsByCategory(category) {
  fetch(`${url}/category?c=${category}`)
    .then(resp => resp.json())
    .then((data) => showProducts(data))
}
