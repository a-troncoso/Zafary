# Proyecto Zafary



​	Esta evaluación consiste en construir un pequeño flujo de pantallas que integra casi todos los conceptos vistos en el módulo; HTML, CSS y JavaScript.



​	Basado en el repositorio donde construimos un mini proyecto llamado "Zafary" e incluimos una pantalla de login con una validación de usuario. Ahora debemos agregar las pantallas de layout, home, whatzapp y zpotify. 



​	La idea es que tengamos la misma distribución de carpetas y archivos que habíamos trabajado anteriormente. Tal como se muestra en este repositorio.



​	En este repositorio encontrarán la estructura básica de nuestro proyecto (tranquilos, los archivos estarán vacíos), __importante__: los archivos de imágenes están dentro de la carpeta /assets dentro de cada carpeta (Home, Layout, WhatZapp).


Las imagenes para los usuarios las pueden enconrar en: https://randomuser.me/photos

El diseño se encuentra en la URL: https://www.figma.com/file/H4WSgzsnoxwivf7zq15Tdr/Zafary?node-id=0%3A1


### Condiciones:

__Ahora lo malo:__

​	Definí los siguientes criterios de aceptación con un puntaje del 1 al 7 según cuanto considero que se logró el criterio:

1. Página es igual al diseño
2. Código HTML y JS legible (estructura y tabulación)
3. Uso de JavaScript y CSS puro (no se usan librerías escritas en JavaScript o en CSS)
4. Se suben archivos por consola (no por arrastrar/soltar)
5. No se permite ingresar al home del layout si el email de usuario o contraseña son incorrectos (usuario: ejemplo@gmail.com, contraseña: 123456)
6. Se muestra mensaje de error rojo bajo el botón si el email de usuario o contraseña son incorrectos

---

### El plazo de entrega es hasta el domingo 19 de Enero (23:59:59 hrs.)

---

---

#### Tips:

##### Redireccionar:

​	Para redireccionar desde el login a la pantalla de Layout hay que aplicar algo así:

````javascript
const boton = document.querySelector(#'id-del-boton');
boton.addEventListener('click', funcionQueRedirecciona);

function funcionQueRedirecciona() {
	document.location.assign('ruta-donde-está-el-layout');
}
                                 
````

##### Contenido dinámico:

​	Para que podamos navegar entre las distintas pantallas, incrustaremos un HTML (en este ejemplo el HTML del Home) dentro del HTML del Layout.

````html
<iframe src="ruta-donde-esta-el-home/index.html"></iframe>
````

##### Íconos:

​	Para esta evaluación podremos usar las imágenes para mostrar los íconos del menú (home, zafary o zpotify). Pero también podemos usar una función mas pro. Agregando íconos que funcionan como caracteres y pasan por css. Esto nos permite ahorrar memoria y recursos.

​	Hay un recurso, llamado FontAwesome (una de las mejores opciones para manejar íconos):

1. Ingresamos a https://fontawesome.com/start

2. Ingresamos nuestro correo, esperamos, y nos registramos desde el link que nos llega a nuestro email.

3. Luego de registrarnos, se nos muestra una URL parecida a esta (no usar esta que aparece como ejemplo): 

   ````html
   <script src="https://kit.fontawesome.com/4f5a582d8d.js" crossorigin="anonymous"></script>
   ````

4. Debemos llevar esa etiqueta script a nuestro HTML (dentro del head)

5. podremos agregar un ícon. Por ejemplo el del Home:

   `````html
   <i class="fas fa-home"></i>
   `````

6. Podemos ver más íconos disponibles en: https://fontawesome.com/icons?d=gallery

