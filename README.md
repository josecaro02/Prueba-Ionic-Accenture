# Accenture Test

Proyecto desarrollado como prueba de habilidades en Ionic

## Getting Started

Aquí encontrarás notas del desarrollo de la app de prueba.


### Installing

Install Ionic

```
$ sudo npm install -g ionic

```


## Running the tests

Si desea correr una prueba del programa en el navegador el comando es el siguiente:

```
$ ionic serve

```

## Apk Location

El nombre del apk para su intalación es "accenture_test.apk" y se encuentra en la carpeta inicial del proyecto.


## Sustentation

La app cumple con los requisitos pedidos como el tema con los colores solicitados. En el formulario el botón "Continuar" solo se activará si el campo esta lleno y se cumple con los requisitos Ej:(En el campo de identificación solo se pueden usar numeros), además si el usuario es menor de 18 años se presentará un "Toast" que aclarara que es menor de edad, y en el caso del nombre y apellido solo se activará si están diligenciados los dos campos a la vez.

El archivo .html se encuentra en src/app/home/home.page.html; en el se encontrará todo el codigo usado como botones e inputs para cada uno de los campos solicitados.

El archivo .ts se encuentra en src/app/home/home.page.ts; en el estarán todas las funciones utilizadas (comentadas para su reconocimiento) como:
        -Cálculo de la edad para evitar que el usuario continue si es menor de edad.
        -Aumento de la barra a medida que el formulario se llena.
        -Funcián que llama al "servicio- provider" al terminar de llenar el formulario y hace "POST" en la direccion entregada (https://testbankapi.firebaseio.com/clients.json).

El archivo .scss se encuentra en src/app/home/home.page.scss donde se encontrarán los estilos asignados de acorde a la paleta de colores pedida.

El "servicio-provider" que se uso se encuentra en src/app/Service-Provider/rest-api-service.service.ts y en el se encuentra la función HTTP POST que se llamó al terminar el formulario para enviar los datos a la dirección en firebase.


## Author

* **Jose David Caro Cantor** - *Prueba Accenture Desarrollador Ionic*)



