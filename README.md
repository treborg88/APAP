# Proyecto Cypress para APAP


En este proyecto los test automatizados estan dentro de la carpeta cypress/e2e.


## Tabla de contenidos
1. [Instalación](#instalación)
2. [Características](#características)
3. [Contacto](#contacto)


## Instalación  
Por favor, instala node.js para poder instalar Cypress a través de npm.

Tienes que tener git instalado localmente para poder clonar el repositorio.

Clona el repositorio usando 
``` git clone https://github.com/treborg88/APAP.git ```

Navega a la carpeta APAP

Ya dentro del directorio instala Cypress a través de npm:

```npm install cypress --save-dev```

Esto instalará Cypress localmente como una dependencia de desarrollo para tu proyecto.
Asegúrate de haber ejecutado ```npm init``` o de tener una carpeta ```node_modules``` o un archivo ```package.json``` en la raíz de tu proyecto para asegurarte de que Cypress se instale en el directorio correcto.

Por defecto, las pruebas se ejecutan en modo "headless" (sin interfaz gráfica). Para ejecutar las pruebas en la consola con interfaz gráfica, utiliza el siguiente comando:

``` npx cypress run --spec cypress/e2e/login-spec.cy.js --headed```



## Características
El Test Plan se compone de estos test cases:
1. Iniciar sesión con usuario y contraseña correctos.
2. Ingresar un número válido. 
3. Verificar que la información se muestre correctamente al pasar el mouse sobre la imagen de un usuario. 
4. Seleccionar una opción del menú desplegable.

Todos los casos de prueba se ejecutaron de manera exitosa.




## Contacto
*Robert Galva*

roberg1988@gmail.com
