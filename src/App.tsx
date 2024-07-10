import Scene from "./three/Scene";
import Projects from "./Projects.tsx";

function App() {
  return (
    <>
      <div className={"container"}>
        <section>
          <h1>Stefany Carballo</h1>
        </section>
        <section className={'section-color'}>
          <h1>Personal Projects</h1>
            <Projects/>
        </section>
        <section>
          <h1>React | Vue | ThreeJs | WebGl</h1>
        </section>
      </div>
      <Scene />;
    </>
  );
}

export default App;
