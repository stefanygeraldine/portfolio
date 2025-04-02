import {type ReactElement} from 'react'
interface IProject {
    name: string
    link: string
    technologies: string[]
}

const SvgIcon = (): ReactElement => {
    return (
        <svg width="69px" height="69px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             stroke="#fb00ff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                    stroke=" #f0f" stroke-width="1.5" stroke-linecap="round"></path>
                <path
                    d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                    stroke=" #f0f" stroke-width="1.5" stroke-linecap="round"></path>
            </g>
        </svg>
    )
}
const Projects = (): ReactElement => {
    const projects = [
        {
            name: "Cute Game",
            technologies: ["Pixi.js","Pixel Art", "Typescript"],
            link: "https://github.com/stefanygeraldine/cute-game/"
        },
        {
            name: "Pokemon Challenge",
            technologies: ["Vue3", "typescript", "Vite"],
            link: "https://stefanygeraldine.github.io/fast-track-challenge"
        },
        {
            name: "Three.js Environment Map",
            technologies: ["React", "ThreeJs", "WebGl"],
            link: "https://stefanygeraldine.github.io/threejs-envoirement-map/"
        },
        {
            name: "Three.js Galaxy Generator",
            technologies: ["React", "ThreeJs", "WebGl"],
            link: "https://stefanygeraldine.github.io/galaxy-generator/"
        },
        {
            name: "Three.js Basic Shader",
            technologies: ["React", "ThreeJs", "GLSL"],
            link: "https://stefanygeraldine.github.io/basic-shaders/"
        },
        {
            name: "Three.js Particle",
            technologies: ["React", "ThreeJs", "WebGl"],
            link: "https://stefanygeraldine.github.io/threejs-particles/"
        },
        {
            name: "Haunted House",
            technologies: ["React", "ThreeJs", "WebGl"],
            link: "https://stefanygeraldine.github.io/threejs-haunted-house/"
        },
    ];
    return (
        <div className={'container-cards'}>

            {projects.map((project: IProject, index: number) => (
                <a  className={'project'} key={index} href={project.link} target={'_blank'}>
                    <div className={'neon-border'}>
                        <SvgIcon/>
                        <h5>{project.name}</h5>
                        <div>

                            {project.technologies.map((technology: string, index: number) => (
                                <div className={'chip'} key={index}>{technology}</div>
                            ))}

                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Projects;