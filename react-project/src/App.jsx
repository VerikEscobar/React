//USAR IMAGENES CORRECTAMENTE
import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
//FORMA ALTERNATIVA DE USAR COMPONENTE CON PROPS
import { CORE_CONCEPTS } from './data';

//RANDOMIZAR VALORES DE UN ARRAY
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

//COMPONENTE HEADER
function Header () {
  const descripcion = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descripcion} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

//LOS COMPONENTES SE PUEDEN REUSAR PERO NO ES OBLIGATORIO HACERLO
//COMPONENTE CON PROPS
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.descripcion}</p>
    </li>
  )
}

function CoreConceptAlt({image, title, description}){
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

//BODY
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title="Components" 
              descripcion="The core UI bulding block - compose the user interface by combining multiple components."
              image= {componentImg}
            />
            <CoreConceptAlt 
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConceptAlt {...CORE_CONCEPTS[2]}/>
            <CoreConceptAlt {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
