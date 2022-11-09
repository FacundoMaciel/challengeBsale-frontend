//Variables
const url = 'http://localhost:3000/api/products'
const products = document.querySelector('#products')

//Event
 document.addEventListener('DOMContentLoaded', getProducts)
//     try {
//       const products = await getProducts(); 
//     } catch (error) {
//       console.log('Error', error);
//     }
//   });

//Functions
function getProducts(){
    fetch(url)
    .then( resp => resp.json())
    .then( (data) => showProducts(data))
}
// const getProducts = async () => {
//     try {
//       const { data } = await axios.get(url);
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.log('Error', error);
//     }
// };

const showProducts = (data) => {
    data.forEach(({ name, url_image, price, discount }) => {
        const productDiv = document.createElement('div')
        productDiv.innerHTML = `
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
          <div class="col-md-4">
          <img class="card-img-top" src="${
            url_image == '' || url_image == null
              ? `https://www.cuestalibros.com/content/images/thumbs/default-image_550.png`
              : url_image
          }" 
          alt="notFound" />
        </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h4 class="card-text"><small class="text-muted">$ ${price}</small></h4>
      </div>
    </div>
  </div>
</div>
        `
        products.appendChild(productDiv)
    });
} 