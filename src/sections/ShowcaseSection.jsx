import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/case_study.png" alt="Ryde App Interface" />
              <a
                className="download-btn"
                href="/images/case_study.png"
                download="case_study.png"
                aria-label="Download case study image"
                title="Download"
              >
                <img src="/images/arrow-down.svg" alt="Download" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                Performance Scaling: Reducing Cost Per Qualified Lead by 40% Across Nepal's Top Colleges
              </h2>
              <p className="text-white-50 md:text-xl">
              Implemented a systematic testing protocol to eliminate poor leads, ensuring a lower average Cost Per Result and a 30% lift in overall lead efficiency.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/case_study2.png"
                  alt="Library Management Platform"
                />
                <a
                  className="download-btn"
                  href="/images/project2.png"
                  download="project2.png"
                  aria-label="Download project image"
                  title="Download"
                >
                  <img src="/images/arrow-down.svg" alt="Download" />
                </a>
              </div>
              <h2>Cost per result decrease of Mumbuds Nepal: Sales Campaign</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
                <a
                  className="download-btn"
                  href="/images/project3.png"
                  download="project3.png"
                  aria-label="Download project image"
                  title="Download"
                >
                  <img src="/images/arrow-down.svg" alt="Download" />
                </a>
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;