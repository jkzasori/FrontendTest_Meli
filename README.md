## Como correr el aplicativo

Nota: La plicación está hecha con node 12, express para el manejo de el backend y la generación de los nuevos endpoints y react para la interfaz gráfica y consumir los servicios.
Primero dirijase a la carpeta server e instale las dependecias con

### `npm install o yarn install`

Ahora corra el backend con express con el siguiente comando

### `npm start o yarn start`

Despues dirijase a la carpeta client

Aquí deberá crear un archivo

### `.env`

el contenido de dicho archivo deberá copiarlo del archivo

### `.env_example`

lo anterior es para la variable de entorno que contiene la url del backend.

Ahora sí, en la carpea client, instalé dependencias con:

### `npm install o yarn install`

Corra el aplicativo con el siguiente comando

### `npm start o yarn start`

abra [http://localhost:3000](http://localhost:3000) y mire el navegador el aplicativo

### SERVER

Antes que nada
Existen 2 carpetas, una que maneja el backend con express (server) y otra el Frontend con React(client) para correr la aplicación se debe ingresar a cada una de dichas carpetas y ejecutar el comando npm install o yarn install, tanto en la carpeta server y la carpeta client.
La parte dem server con express cuenta con un sistema de csrpetas que además de organizar la información y los archivos, facilita altamente ka busqueda de los mismos archivos, ya wue se encuebtrab clasificados como se mensiona a continuacion:

Carpeta externalServices: es dónde se manejan las peticiones externas de la aplicación, en este caso son los servicios del api de MercadoLibre. Al contar con esta carpeta, si en un futuro se quisieran agregar servicios externos de otros lugares, esto ayudaría y permitiría concentrar todas esas peticiones externas en un solo lugar (carpeta) y por ende, será más fácil ma te er el código.

Para las peticiones externas se usó axios.Además, se instaló Babel para hacer más amigable la esceitura de código en Javascript.

La carpeta utils, contiene una llamada formatData. en dicha carpeta se encuentra un archivo con funciones que reciben la data optenida de las api search e itenDetail de MercadoLibre y devulven el formato requerido con la informacion necesaria para realizar el test del lado del Frontend.

La carpeta routes, es dónde están las rutas de las API utilozadas en el Frontend; ademas, aquí es dónde se llaman los servicios externos y se hace el formateo de la data recibida, para ser enviada la data con el juevo formato al Frontend.

Dichas rutas son llamadas en el archivo server.js que es el archivo principal y se encuentra en la raiz de la.carpeta server.

### CLIENT

En el client existe un archivo llamado .envexample, con la información de dicho archivo (que maneja las variables de entorno) se construirá un archivo llamado .env y se copiará el contenido de dichi archivo (.envecample) y después de ello ya se podría correr tanto el server con npm start y el client con npm start, también.

El cliente(Frontend) tiene un sistema de carpetas muy organizado que permite lafácil lectura del código.

#Carpete de Components

Posee los componentes que pueden ser reutilizados en los containers

#Carpeta Containers

Son componente encargador de agrupar una serie de componentes para mostrar la intervas de la página. Por ejemplo, el container detail Es un componente que contiene otros componentes, que son necesarios para mostrar la vista de detalle de un producto.

#Carpeta libs

Contiene utilidades como constantes(archivo con las contantes de colores que pueden ser reutilizados), archivo con las rutas y archivos de los servicios o mejor dicho, archivos con los enpoinst que se proporciona el backend.

#Carpeta Assets

Contiene todo los media utilizados en el aplicativo (imágenes y/o videos y demas )

### Para el SEO se utilizpo Helmet - react
### Para los estilos se usó style-coponents
### Para las rutas se utilizó react-router-dom
### Se utilizó para la contrucción del frontend react con Hooks
### Los componentes fueron construidos con poco código, para facilitar su lectura. Además, la carpeta de components y todos los componentes que allí se encuentran, son reutilizables, así como el Search bar, el breadCrumbs, etc.


**Note: Cabe resaltar que el código utilizado y la forma en la que se construyó ek server con express, permite su fácil lectura y mantenibilidad, dado ma organización y que las funciones que allí se utilizan, pueden ser reutilizadas, tanto como se requiera y en dónde se necesite...**

###Autor: José Támara