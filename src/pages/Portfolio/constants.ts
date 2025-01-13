import { Project } from "./types";

import fizzi from '../../assets/images/projects/fizzi.png';

export const projects: Project[] = [
    {
        title: 'Ecommerce Single Page',
        desc: 'I’ve just built my first 3D landing page as part of a study project. Inspired by Apple’s design, I explored tools like GSAP, Three.js, and React Three Fiber, all new to me.',
        devstack: "React, Three.js, GSAP, Three Fiber",
        link: "https://fizzi-teal.vercel.app/",
        git: "https://github.com/victor-hdgomes/fizzi",
        src: fizzi,
        type: "frontend"
    },
];