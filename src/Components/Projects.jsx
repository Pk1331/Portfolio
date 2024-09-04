import React from "react";

const Projects = () => {
  return (
    <section className="projectsec">
      <div className="ptitle">
        <h1 className="pname">Projects</h1>
        <h5 className="descri">
          I have Some Full Stack Projects & Frontend Projects
        </h5>
      </div>
      <div className="plist">
        <div className="pl1">
          <img src="fagito.jpg" alt="" />
          <div className="lang">
            <p>Mongodb</p>
            <p>Express</p>
            <p>React</p>
            <p>Node</p>
          </div>
          <h4 className="pjname">Swiggy Clone</h4>
          <div className="simpledesc">
            Fagito is a Swiggy clone app designed to offer seamless online food
            delivery. It allows users to browse a variety of restaurants, filter
            by cuisine, and place orders with ease. With a user-friendly
            interface, Fagito brings your favorite meals to your doorstep
            quickly and conveniently.
          </div>
          <div className="explore">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Pk1331/Swiggy_Clone_UI",
                  "_blank"
                )
              }
            >
              Get Code
            </button>
            <button
              onClick={() =>
                window.open("https://swiggy-clone-ui.vercel.app/", "_blank")
              }
            >
              Website
            </button>
          </div>
        </div>
        <div className="pl1">
          <img src="ecommerce.png" alt="" />
          <div className="lang">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Bootstrap5</p>
          </div>
          <h4>Ecomerce Clone</h4>
          <div className="simpledesc">
            The e-commerce frontend I designed offers a sleek and intuitive
            shopping experience. Users can easily browse products, view detailed
            specifications, and navigate through categories with a stylish
            interface. It’s a clean, responsive design focused on enhancing the
            online shopping experience.
          </div>
          <div className="explore">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Pk1331/Ecommerce/tree/main/ecommerce",
                  "_blank"
                )
              }
            >
              Get Code
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://pk1331.github.io/Ecommerce/ecommerce/index.html",
                  "_blank"
                )
              }
            >
              Website
            </button>
          </div>
        </div>
        <div className="pl1">
          <img src="todousingredux.jpg" alt="" />
          <div className="lang">
            <p>React</p>
            <p>Redux</p>
            <p>CSS</p>
            <p>Bootstrap5</p>
          </div>
          <h4>Todo List</h4>
          <div className="simpledesc">
            A simple to-do list built with React-Redux allows users to add,
            edit, and delete tasks efficiently. The app manages state centrally
            using Redux, making it easy to track and update tasks. Users can
            input new task. The structure is ideal for
            learning the basics of Redux while building a practical application.
          </div>
          <div className="explore">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Pk1331/TodoList-Using-Redux-React",
                  "_blank"
                )
              }
            >
              Get Code
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://pk1331.github.io/TodoList-Using-Redux-React/",
                  "_blank"
                )
              }
            >
              Website
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
