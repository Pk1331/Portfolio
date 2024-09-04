import React from "react";
const Education = () => {
  const iconStyle = { fontSize: "50px", margin: "10px" };
  return (
    <section className="edusec">
      <h1 className="edu">Education</h1>
      <div className="education">
        <div>
          <div className="graduation">
            <h3>B.Tech</h3>
            <p>SRGEC</p>
            <p>2020-2024</p>
            <div className="edudesc">
              I recently graduated with a degree in Electronics and
              Communication Engineering (ECE). My studies focused on the
              intersection of technology and communication systems, equipping me
              with a strong foundation in both hardware and software. This
              education has prepared me to start my career as a software
              engineer.
            </div>
          </div>
          <div className="inter">
            <h3>Intermediate</h3>
            <p>Sri Vijayananda Junior College</p>
            <p>2018-2020</p>
            <div className="edudesc">
              I completed my Intermediate education with a focus on Mathematics,
              Physics, and Chemistry (M.P.C). This background provided me with a
              solid understanding of core scientific and mathematical
              principles, laying the groundwork for my further studies in
              engineering.
            </div>
          </div>
          <div className="SSC">
            <h3>SSC</h3>
            <p>Zill Parshid High School</p>
            <p>2017-2018</p>
            <div className="edudesc">
              I completed my SSC (Secondary School Certificate), where I built a
              strong foundation across various subjects, including mathematics,
              science, and languages. This stage of education played a crucial
              role in shaping my academic journey and preparing me for higher
              studies.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
