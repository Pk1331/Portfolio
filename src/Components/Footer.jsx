import React from "react";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaPhone,
    FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footersec">
      <section className="footer">
        <a
          href="https://www.linkedin.com/in/ande-pavan-kumar-71897620b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} color="#0077B5" />
        </a>
        <a
          href="https://github.com/Pk1331"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} color="#333" />
        </a>
        <a
          href="https://wa.me/6281601463"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} color="#25D366" />
        </a>
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="andepavan37@gmail.com"
        >
          <FaEnvelope size={20} color="#D44638" />
        </a>
        <a href="tel:+916281601463" target="_blank" rel="noopener noreferrer" title="6281601463">
          <FaPhone size={20} color="#4CAF50" />
        </a>
      </section>
      <div className="info">
        <h4>© Ande Pavan Kumar  2024 </h4>
      </div>
    </div>
  );
};

export default Footer;
