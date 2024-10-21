# React

# Components
    HTML, CSS, JavaScript.
    Es lo que forma la estructura de la pagina web de manera ordenada y sencilla
    Algunas de sus partes son:
        - Header: Muestra el titulo principal el subtitulo y algun logo
        - Core Concept Items: Toda la informacion pricipal de la pagina
        - Interactive Tabs: Son tablas que interactuan con elusuari y cambian de 
          informacion dependiendo de lo seleccionado
    Porque usar components?
        - Bloques de construccion reusables: Creams unos bloques pequeños y 
          compones tu UI desde ellos. Si es necesario se reusa los bloques en 
          distintas partes de la UI.
        - Puedes usar distinto lenguajes juntos: Se puede conbinar de manera 
          sencilla codigos de HTML, JS y posiblemente CSS ya que estan guardados 
          juntos en un mismo proyecto
        - Separacion de preocupaciones: Cada componente maneja iferents ipo de 
          datos y logica esto simplifica el trabajo en apps o sitios webs mas 
          complejos.
# Valores Dinamicos
    Si se quiere crear un valor dinamico se tiene que crear un const que tenga los valores
    dentro de un array.
      EJEMPLO: 
        const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
    Despues crear una funcion que randomize los valores.
      EJEMPLO: 
        function getRandomInt(max) {
          return Math.floor(Math.random() * (max + 1));
        }
    Y para llamar el valor random se puede hacer dentro de unas {} y poner  de la siguiente
    manera: nombredeconst[nombredefuncion(valormaximo de array)] o en un const antes del
    return de la funcion en la que se usa.
      EJEMPLO:
        {reactDescriptions[getRandomInt(2)]} 
        O
        const descripcion = reactDescriptions[getRandomInt(2)]; y al llamar {descripcion}
# Usar Imagenes para que no se piedan en el Deploy
    