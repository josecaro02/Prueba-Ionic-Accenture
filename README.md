# Accenture Test

Proyecto desarrollado como prueba de habilidades en Ionic

## Getting Started

Aqui encontraras notas del desarrollo de la app de prueba.


### Installing

Install Ionic

```
$ sudo npm install -g ionic

```


## Running the tests

Si desea correr una prueba del programa en el navegador el comando es el siguiente

```
$ ionic serve

```

## Apk Location

El nombre del apk para su intalacion es "accenture_test.apk" y se encuentra en la carpeta inicial del proyecto


## Sustentacion

La app cumple con los requisitos pedidos como el tema con los colores solicitados. En el formulario el boton "Continuar" solo se activara si el campo esta lleno y se cumple con los requisitos Ej(En el campo de identificacion solo se pueden usar numeros), ademas si el usuario es menor de 18 años se presentara un "Toast" que aclarar que es menor de edad y en el caso del nombre y apellido solo se activara si estan diligenciados los dos campos a la vez.

El archivo .html se encuentra en home/home.page.html; en el se encontrara todo el codigo usado como botones e inputs para cada uno de los campos solicitados.

El archivo .ts se encuentra en home/home.page.ts; en el estaran todas las funciones utilizadas (comentadas para su reconocimiento) como:
        -Calculo de la edad para evitar que el usuario continue si es menor de edad.
        -Aumento de la barra a medida que el formulario se llena.
        -Funcion que llama al "servicio- provider" al terminar de llenar el formulario y hace "POST" en la direccion entregada (https://testbankapi.firebaseio.com/clients.json).

El archivo .scss se encuentra en home/home.page.scss donde se encontrarn los estilos asigandos de acorde a la paleta de colores pedida.

El "servicio-provider" que se uso se encuentra en app/Service-Provider/rest-api-service.service.ts y en el se encuentra la funcion HTTP POST que se llamo al terminar el formulario para enviar los datos a la direccion en firebase.


## Author

* **Jose David Caro Cantor** - *Prueba Accenture Desarrollador Ionic*)



