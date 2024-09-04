import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiRedux } from "react-icons/si";
const Skills = () => {
  const iconStyle = { fontSize: "20px", margin: "10px" };
  return (
    
      <section className="skillsec">
        <div className="skills">
          <div>
            <h1 className="skilltitle">Skills</h1>
            <h5 className="descri">
              Here are some of my skills on which i have learnt
            </h5>
          </div>
          <div className="skilltype">
            <div className="frontend">
              <div className="ftitle">
                <h1 className="S_T">Frontend</h1>
              </div>
              <div className="flist">
                <div className="item">
                  <FaHtml5 style={{ ...iconStyle, color: "#E34F26" }} />
                  <p>CSS</p>
                </div>
                <div className="item">
                  <FaCss3Alt style={{ ...iconStyle, color: "#1572B6" }} />
                  <p>CSS</p>
                </div>
                <div className="item">
                  <FaReact style={{ ...iconStyle, color: "#61DAFB" }} />
                  <p>React.Js</p>
                </div>
                <div className="item">
                  <FaJs style={{ ...iconStyle, color: "#F7DF1E" }} />
                  <p>Javascript</p>
                </div>
                <div className="item">
                  <FaBootstrap style={{ ...iconStyle, color: "#7952B3" }} />
                  <p>Bootstrap5</p>
                </div>
              </div>
            </div>
            <div className="frontend">
              <div className="ftitle">
                <h1 className="S_T">Backend</h1>
              </div>
              <div className="flist">
                <div className="item">
                  <FaPython style={{ ...iconStyle, color: "#3776AB" }} />
                  <p>Python</p>
                </div>
                <div className="item">
                  <FaJava style={{ ...iconStyle, color: "#007396" }} />
                  <p>Java</p>
                </div>
                <div className="item">
                  <FaNodeJs style={{ ...iconStyle, color: "#339933" }} />
                  <p>Node.Js</p>
                </div>
                <div className="item">
                  <SiMysql style={{ ...iconStyle, color: "#4479A1" }} />
                  <p>Mysql</p>
                </div>
                <div className="item">
                  <SiMongodb style={{ ...iconStyle, color: "#47A248" }} />
                  <p>Mongodb</p>
                </div>
              </div>
            </div>
            <div className="frontend">
              <div className="ftitle">
                <h1 className="S_T">Others</h1>
              </div>
              <div className="flist">
                <div className="item">
                  <FaGit style={{ ...iconStyle, color: "#F1502F" }} />
                  <p>Git</p>
                </div>
                <div className="item">
                  <FaGithub style={{ ...iconStyle, color: "#333" }} />
                  <p>GitHub</p>
                </div>
                <div className="item">
                  <SiRedux style={{ ...iconStyle, color: "#764ABC" }} />
                  <p>Redux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Skills;
