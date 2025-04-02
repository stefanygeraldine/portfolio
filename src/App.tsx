import Scene from "./three/Scene";
import Projects from "./Projects.tsx";
import Name from "/name2.png";

function App() {
  return (
    <>
      <div className={"container"}>
        <section>
            <img src={Name} alt="name" style={{ width: '60%' }}/>
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
