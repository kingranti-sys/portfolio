import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import "../pages/Projects.css";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpeg";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Mi Portafolio",
      category: "Frontend",
      image: image1,
      description:
        "A responsive and accessible personal portfolio showcasing my crafts",
      technologies: ["React", "CSS", "Bootstrap"],
      // demo: "",
      github: "https://github.com/kingranti-sys",
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "Full-Stack",
      image: image2,
      description:
        "An online shopping application with user authentication, product browsing, users role and cart funtionality",
      technologies: ["React", "Django", "REST API"],
      demo: "https://shopnow-main.vercel.app/",
      github: "https://github.com/kingranti-sys",
    },
    // {
    //   id: 3,
    //   title: "",
    //   category: "",
    //   image: "",
    //   description: "",
    //   technologies: [""],
    //   // demo: "",
    //   github: "https://github.com/kingranti-sys",
    // },
    // {
    //   id: 4,
    //   title: "",
    //   category: "",
    //   image: "",
    //   description: "",
    //   technologies: [""],
    //   // demo: "",
    //   github: "https://github.com/kingranti-sys",
    // },
  ];

  const categories = ["All", "Frontend", "Full-Stack"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-heading">
          <p className="projects-subtitle">MY PORTFOLIO</p>
          <h1>
            Featured <span>Projects</span>
          </h1>
          <p>
            Here are some projects that showcase my skills, creativity, and
            passion for building web applications
          </p>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`project-filter ${
                filter === category ? "active" : ""
              }`}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <article className="project-card">
                <div className="project-image">
                  <img src={project.image} alt="project.title" />
                </div>
                <div className="project-card-body">
                  <span className="project-category">{project.category}</span>

                  <h2>{project.title}</h2>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={`${project.id}-${tech}-${index}`}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live Demo <MdArrowOutward />
                      </a>
                    )}

                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
