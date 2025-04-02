
    const AboutMe = () => {
        return (
            <section className="about-me">
                <h1>About Me</h1>
                <h4>System Engineer | 2015</h4>
                <p className={'about'}>
                    Hello! I'm <strong className={'about--strong'}>Stefany Carballo</strong>,
                    a passionate frontend developer with experience in
                    <br/>
                    React, Vue, Three.js, also some of and WebGL, GLSL and Pixel Art.
                    <br/>
                    I love creating interactive and visually appealing web applications.
                    <br/>
                    I have interest by visual arts, anime, and video games.
                    <br/>
                    Also I am amateur illustrator,
                    <br/>
                </p>


                <p className={'about'}>
                    Check my references on
                    <a className={'about--link'} href="https://www.linkedin.com/in/stefany-carballo-815019a4/" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </a>
                    Check out my work on
                    <a className={'about--link'} href="https://github.com/stefanygeraldine" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    and follow me on
                    <a className={'about--link'} href="https://www.instagram.com/stefy.magic.craft/?hl=es" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>.
                </p>
            </section>
        );
    };
export default AboutMe;