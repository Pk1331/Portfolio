import React from "react";
const About = () => {
  const openPDF=()=>
    {
      const pdf="https://drive.google.com/file/d/19_NqhMK33d2mxacajeIQQ02WdWiXn4aS/view?usp=sharing"
      window.open(pdf,"_blank");
    }
  return (
    <section className="aboutsec">
      <div className="About">
        <div className="name">Hi, I am</div>
        <div className="name">Pavan Kumar Ande</div>
        <span>
          {" "}
          I am a <span className="role">Software Engineer</span>
        </span>
        <div className="more">
          I'm a recent graduate in Electronics and Communication Engineering
          (ECE) from SRGEC. I have a strong foundation in software development,
          with experience in relevant skills Java, Python, HTML, CSS, JavaScript
          etc.. I'm passionate about building efficient, scalable software
          solutions and am eager to apply my knowledge as a Software Engineer
        </div>
        <div className="resume">
          <button onClick={openPDF}>Check Resume</button>
        </div>
      </div>
      <div className="Profile">
        <img src="Pavan_Kumar.jpg" />
      </div>
    </section>
  );
};

export default About;
