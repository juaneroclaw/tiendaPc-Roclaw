Compu Market - Juan Ezequiel Roclaw

En este proyecto realizo el ecommers de una tienda que vende productos de informatica, se vende desde pc armadas hasta hardware separados.

Lo que se hizo:

1.  Se creo un nueva app ejecutando "create-react-app nombre-de-app"
2.  Una ves creado instale boostrap para el diseño del mismo "npm install react-bootstrap bootstrap"
3.  Cree los componentes y el container que va a ser parte del aplicativo
3.A La carpeta component esta compuesta por 
    a.  CartWidget: es el carrito
    b.  Items: son todas las componetes que se solicita para el item
    c.  NavBar: es el navegador del sitio
3.B La carpeta Container tiene los elemimando de container del sitio, en este caso los componetes de listado y detalle de items
4.  Se utilizo hooks y promesas para muestreo de datos, en ItemListContainer hay una constante que simula ser los datos rescatados de una base o Api, contiene una promesa y un retraso de 2 segundo como una simulacion de error de navegacion.
5.  Una ves que se cargaron los datos los mismo son enviados a ItemList que a traves de un map cargan un contenedor de informacion llamado Items
6. Todo lo dicho anteriormente se puede observar en el inicio del sitio, si uno quiere navegar por el sitio puede ir a las categorias y seleccionalas, las mismas estan dirigidas a ItemsListContainer con la diferencia que al ir a la categoria en el componente se filtra por la categoria selecionada.
7. En el caso de ver de forma individual cada items, se puede navegar haciendo click en el boton detalles, el mismo envia el id y se direcciona a ItemDetailContainer
8. En ItemDetailContainer se lo que se hace es realiza una simulacion igual a ItemListContainer con la diferencia que se filtra por el id del item, para enviar ese dato a ItemDetail y mostrar el detalle del item
9. Tanto en Items como en ItemsDetail se llama a ItemsCount que son los botones que agregan a quitan las cantidad de productos que desea comprar dependiendo del stock cargado en cada item.
10. Toda la navegacion nombrada en los puntos anteriores es gracia a la instalacion "npm install  react-router-dom"

![alt text](public/imagenes/navegador.gif)