import React from "react";
import "../pages/About.css"

import { FaToolbox } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { IoServer } from "react-icons/io5";
import { CiServer } from "react-icons/ci";

function About() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: <CiServer />,
      skills: [
        { name: "Python (Django)", level: 70 },
        { name: "Node.js (Express)", level: 60 },
        { name: "REST APIs", level: 75 },
      ],
    },
    {
      title: "Databases",
      icon: <IoServer/>,
      skills: [
        { name: "MySQL", level: 70 },
        { name: "PostgresSQL", level: 60 },
      ],
    },
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-heading">
          <p className="about-subtitle">GET TO KNOW ME</p>
          <h1>
            About <span>Me</span>
          </h1>
          <p>
            A little about my journey, my background, and the skills I'm
            building as a Full-Stack Developer.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-6">
            <div className="about-content">
              <h2>
                I'm Aderanti, a{" "}
                <span className="text-accent">Full-Stack Web Developer.</span>
              </h2>

              <p>
                I'm a Full-Stack Web Developer with a background in Graphic
                Design and passion for building modern, responsive,
                user-friendly and well structured web applications.
              </p>

              <p>
                I enjoy working across both frontend and backend development,
                turning ideas into functional digital experiences. My graphical
                background also helps me approach projects with details on
                visuals, usability, and consistency.
              </p>

              <p>
                I'm continously learning, exploring new technologies, and
                building projects that solve real-world problems.
              </p>

              <div className="about-details">
                <p>
                  <FaToolbox  className="detail-icon"/>
                  <strong>Profession:</strong> Full-Stack Developer
                </p>
                <p>
                  <IoColorPaletteOutline className="detail-icon"/>
                  <strong>Background:</strong> Graphic Design
                </p>
                <p>
                  <FaCode className="detail-icon"/>
                  <strong>Focus:</strong> Web Applications
                </p>
                <p>
                  <TbTargetArrow  className="detail-icon"/>
                  <strong>Goal:</strong> Building useful digital solutions
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="skills-content">
              <h2>My Skills</h2>
              <p>technologies and tools I use to build web applications.</p>

              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <div className="skill-group-heading">
                    <div className="skill-group-icon">
                      {group.icon}
                    </div>
                    <h3>{group.title}</h3>
                  </div>

                  {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>

                      <div
                        className="progress skill-progress"
                        role="progressbar"
                        aria-label={skill.name}
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
