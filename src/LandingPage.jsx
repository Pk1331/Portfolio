import React, { useRef } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
const LandingPage = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        onAboutClick={() => scrollToSection(aboutRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onEducationClick={() => scrollToSection(educationRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
