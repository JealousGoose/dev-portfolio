import { useRef } from "react";
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { expCards } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.1 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        );
    });
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaseLayout">
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">

                            <img src="/images/project1.png" alt="Ryde"/>

                        </div>

                        <div className="text-content">

                            <h2>On-Demand Rides Made Simple with Powerful, User Friendly App Called Ryde </h2>

                            <p className="text-white-50 md:text-xl">
                                An App built with React Native, Expo and TailwindCSS for a fast, user friendly experience
                            </p>

                        </div>
                        
                    </div>

                    <div className="project-list-wrapper overflow-hidden mt-10">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Library Management Platform"/>
                            </div>

                            <h2>Library Management Plaform</h2>
                            
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="YC Directory"/>
                            </div>

                            <h2>YC Directory - A Startup Showcase App</h2>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection;
