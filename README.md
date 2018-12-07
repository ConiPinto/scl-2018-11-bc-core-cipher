# Concilio Fusión

¿ Somos realmente conscientes de lo rica en diversidad que es la música en nuestro país, 
o de la gran cantidad de talento musical con el que contamos ?,
¿Cuántos espacios físicos existen para poder expresar de manera libre y compartida la pasión por la música ?, 
¿Cómo comunidad de amantes de la música nos apoyamos mutuamente?.

`Concilio Fusión` es una plataforma web que busca reunir a la comunidad musical chilena 
(aficionados, profesionales, principiantes, curiosos, etc.) de todos los géneros, creando instancias para compartir 
(tocatas, sesiones de práctica, sesiones teóricas, etc.), para crear contactos, aprender, formar amistades , compartir experiencias, todo esto de manera libre y amigable, con un método social.

El usuario ingresa un mensajes con información que posteriormente es cifrada,con un numero de desplazamiento 
determinado que lo convierte en un texto totalmente ilegible. Este proceso recibe el nombre de cifrado césar, que es la base técnica de este proyecto.

¿Qué es el cifrado césar?

El Cifrado César es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

Es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

¿A quién está dirigida esta aplicación web?

Nuestros usuarios son músicos en busca de un espacio cultural de apoyo amigable, cálido y compartido.


#### Origen del nombre de la aplicación

Concilio Fusión es la mezcla entre dos palabras que representan claramente el propósito del uso de esta aplicación, las definiciones son las siguientes:

- Concilio: Reunión de personas para tratar de algún asunto.
- Fusión: consiste en la creación de composiciones o arreglos que vinculan elementos de dos estilos de origen diferente o en combinar elementos de rítmicas y expresiones que por costumbre no suelen ir juntas en una misma composición.

#### Previsualización de Concilio Fusión

<a href="https://ibb.co/2PHYL6B"><img src="https://i.ibb.co/y57BMRJ/pantallazo-portada.png" alt="pantallazo-portada" border="0"></a>



<a href="https://ibb.co/R2Gx0YB"><img src="https://i.ibb.co/xhKpjXf/pantallazo-2.png" alt="pantallazo-2" border="0"></a>
<a href="https://ibb.co/NLcZ5Cy"><img src="https://i.ibb.co/TH9m62g/pantallazo-3-final.png" alt="pantallazo-3-final" border="0"></a>

Inicio de la aplicación. Se visualiza el nombre y una pequeña descripción, explicando nuestro propósito y que usaremos cifrado césar en los mensajes.

Segunda parte de la aplicación. En esta se cifrará y descifrará, el usuario tendrá que leer una serie de instrucciones para poder realizar de manera correcta cada una de las acciones.

Los textos, cajas para ingresar mensaje y botones se posicionaron de manera centrada. con el propósito de que al ingresar a la página el usuario instintivamente
lleve su vista al centro de esta y fije su atención ahí sin distracciones, y siguiendo el orden “natural” de leer de arriba hacia abajo, y de izquierda a derecha sin confusión cada una de las indicaciones.

### Elección de colores

Trabajamos con dos colores, blanco y negro. Se eligió el color negro por su vinculación con la fuerza, la seguridad, la profesionalidad y la formalidad, también porque estiliza y resulta fácilmente combinable con casi cualquier color. Se quiere de alguna manera neutralizar el nombre de la aplicación y transmitir un poco de misterio a través del color.

El color blanco se escogió porque es con el que mas contraste se logra. Queremos que que todos los textos reciban la atención necesaria para que el proceso de cifrado y descifrado funcione de manera correcta, sin distractores, crear mucho contraste entre tipografía y fondo. 

Como background se colocó una imagen de una partitura en color gris y negro, primero para que se cumpla lo que se decía anteriormente de destacar y desviar la atención hacia los textos y segundo para crear contexto a la aplicación.

### Tipografías

Para este proyecto se usaron dos tipografías. La primera es Oleo Script cursive, se aplicó en el nombre de la aplicación y en el mensaje de bienvenida e inicio de instrucciones a seguir.
La segunda tipografía utilizada fue Dosis, es su versión sans-serif. Esta se uso en el resto de los textos de la aplicación. Solo fueron variando los tamaños.

### Organización del proyecto

Para organizar las ideas y el tiempo se usó trello. Se crearon dos tableros para trabajar, el primero(morado), contiene la parte de investigación y decisiones de diseño.
El segundo(celeste), contiene la parte más técnica del trabajo, relacionado al LMS.

Estos Trellos se crearon antes de empezar a trabajar en el editor de texto. Está compuesto de pequeñas meta, fáciles de cumplir. No cuenta con un orden especifico, por lo tanto no funciona de manera lineal.

https://trello.com/b/lqZGhwU4/código-cesar-usuario-diseño 

https://trello.com/b/lHfS6jEo/código-cesar-código

También se ocuparon diagramas de flujo y prototipos, que fueron cambiando considerablemente durante estas dos semanas.

Se buscó que el viaje del usuario por la aplicación fuera lo más simple y clara posible.
Es por esto que nada se toma realmente como obvio, y se prefiere dar instrucciones claras para que el equivocarse en el uso sea menos probable.


## Código

#### Interfaz de usuario

En esta interfaz de usuario se permite al usuario ingresar un mensaje que posterior mente es cifrado. A este mensaje es posible aplicarle un desplazamiento positivo, que indica cuantas posiciones se quiere mover cada letra.
Luego hay dos botones funcionales, el primero para cifrar, y el segundo para descifrar los mensajes. Esta acción produce un resultado que se materializa debajo de estos botones.


En resumen, la interfaz permite al usuario:

- Ingresar un texto a cifrar.
- Elegir un desplazamiento.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

## Orden del código

se trabajo principalmente en cuatro files:

- index.html
- cipher.js
- index.js
- style.css

En el index.html se le designó estructura a la aplicación. También se ingresaron los textos (asignándoles un h) y se le otorgó un id a cada botón y caja de texto, para posteriormente poder darles función en los archivos .js.

En el cipher.js se trabajó la parte lógica del proyecto, utilizando variables (let), Funciones de tipo arrow, bucles (for), condicional (if, else), se transformaron textos a ASCII (charCodeAt) y se usó un objeto (String).

En el index.js se guardó el DOM del proyecto. Se usaron los id´s asignados primeramente en el index.html y se les dio funcionalidad.

Con style.css se asignó color, tamaños, estilo, un fondo de imagen y orden a los elementos.

Para realizar las pruebas se usó Mocha y se trabajó desde la terminal. 


