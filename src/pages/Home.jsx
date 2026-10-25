import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import pp from "../assets/pp.png";

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* introduction */}
            <div className="col-lg-7 order-2 order-lg-1">

               <p className="hero-greeting">
                I'm <span>Aderanti Adebimpe</span>
              </p>

              <p className="hero-description">A full-stack web developer</p>

              <h1 className="hero-title">
                I build modern
                <span>web experiences.</span>
              </h1>

              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View My Projects
                </Link>

                <Link to="/contact" className="btn btn-outline-custom">
                  Contact Me
                </Link>
              </div>

              <div className="hero-socials">
                <a
                  href="https://github.com/kingranti-sys"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/aderanti-adebimpe-a55a00417"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.x.com/kingranti?s=11"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="https://adebimpeaderanti@gmail.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="G-mail"
                >
                  <MdAttachEmail />
                </a>
              </div>
            </div>

            {/* Profile image */}
            <div className="col-lg-5 order-1 order-lg-2">
              <div className="hero-image-wrapper">
                <img src={pp}
                 alt="Aderanti Profile Image"
                 className="hero-image" 
                 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
