<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png" width="200" alt="JS Logo" /></a>
</p>

[circleci-image]: https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png
[circleci-url]: https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png

## Descripción

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

## Correr la app

```bash
# development
Copiar el enlace del archivo index.html y abrir en su navegador o simplemente arrastrarlo.
```

## Testeo

```bash
# unit tests
$ npm run test
```

## Soporte

(https://developer.mozilla.org/en-US/docs/Web/JavaScript).


## Desafío Bsale

<h1 align="center">Desafío producto Bsale</h1>

## El desafío consiste en:

➔ Construir una tienda online.

➔ Utilizar la base de datos que te proporciona la empresa.

➔ Desplegar productos agrupados por la categoría a la que pertenecen.

➔ Generar por separado backend (API REST) y frontend (aplicación que la consuma)

➔ Agregar un buscador, el cual tiene que estar implementado a nivel de servidor,
mediante una Api Rest cuyo lenguaje y framework puede ser de libre elección.
Es decir, los datos de productos deben llegar filtrados al cliente.

➔ Desarrollar la aplicación de cliente con vanilla javascript/Vanillajs.

➔ Disponibilizar la aplicación en un hosting.

➔ Disponibilizar el código en Github.


## Desarrollo

➔ El backend (API REST) se desarrolló con NestJS TypeOrm, se deployó en Heroku y su codigo esta disponible en GitHub.

➔ El frontend (CLIENTE) se desarrolló con VanillaJs, Jquery y Bootstrap, se deployó en vercel y su codigo esta disponible en GitHub.


## Frontend
<h2 align="center">Client</h2>

# Estructura de la página:

  * Header: (sticky-top)
      - Nav Bar: (responsive) se convierte en un menu hamburguesa al cambiar el screen.
      - Bsale logo.
      - Search Bar: Para buscar un producto o productos que coincidan con el nombre ingresado en la barra de busqueda.
      - Filtro para todos los productos en la opcion "Todos los Productos".
      - Menu desplegable con los filtros segun categoria de producto en la opcion "Categorias".
      - Icono carrito de compra con icono de usuario login (enlaces a carrito Bsale y Login Bsale).
  
  * Banner: 
    - Logos Bsale junto a "TIENDA ONLINE".

  * Sección de Productos:
    - Card products dentro de su container con la palabra OFERA! en caso de pertenecer a los productos con oferta, el nombre con el porcentaje de descuento al lado, debajo de eso el precio actual y por ultimo el precio antiguo. En caso de no tener oferta el nombre con su respectivo precio.

  * Footer
    - Enlace a (Bsale)Nosotros con su icono.
    - Enlace a (Bsale)Blog con su icono.
    - Enlace a (Bsale)Recomiendanos su con icono.
    - Enlace a (Bsale)Ayuda con su icono.
    - Enlace a (Bsale)Contacto con su icono.
    - Derechos reservados con enlace al porfolio de Facundo Maciel.

# Funcionalidad:

  Al montarse la página se hace una petición GET al endpoint api/products del servidor, se obtienen y se renderizan todos los productos que hay en la base de datos.

  Al hacer clic en el botón BUSCAR de la barra de búsqueda se hacen validaciones del input ingresado:

    - El input no puede estar vacío.
    - No puede tener una longitud mayor a 15 caracteres.
    - Sólo puede contener letras, espacios y números.

  Si se cumplen las condiciones se hace una petición GET al endpoint api/products/product?s={valor del input} del servidor, se obtienen y se renderizan el/los productos que contienen en su nombre el valor del input mediante un condicional aplicado en el backend. Si no se obtienen productos coincidentes con la solicitud se manda una alerta con un mensaje de error
  
  El el menu de despliegue "Categorias" de la nav bar al seleccionar una se realiza una petición GET al endpoint api/category?s={numero de categoria} que las obtiene y renderiza los productos pertencientes a la misma mediante un condicional aplicado en el backend.

# Deploy:

  Vercel. URL:
  
      https://challenge-bsale-frontend-lvlaciel.vercel.app

