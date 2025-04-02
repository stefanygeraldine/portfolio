import Scene from "./three/Scene";
import Projects from "./Projects.tsx";

function App() {
  return (
    <>
      <div className={"container"}>
        <section>
          <h1 className={'title'}>Stefany Carballo
         <br/>
            In progress
          </h1>
          <a className={'link'}
              href="https://www.canva.com/design/DAEe1yyhwW4/Ui9VVetGH_dknScSxlQO_w/view?utm_content=DAEe1yyhwW4&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          target={'_blank'}
          >Curriculum Vitae</a>
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
