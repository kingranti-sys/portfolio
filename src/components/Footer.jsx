import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        <div className="footer-socials mx-auto">
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

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aderanti. All rights reserved.</p>
          <a href="#top" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
