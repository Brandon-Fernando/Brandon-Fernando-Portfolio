'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useCallback, useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Home() {
  const [selectedProject, setSelectedProject] = useState("AI Flashcards");

  const datas = {
    "AI Flashcards": {
      url:"",
      github: "https://github.com/Brandon-Fernando/Flashcard-SaaS"
    },
    "15 Or Less Game": {
      url: "",
      github: ""
    },
    "Pantry Tracker": {
      url: "", 
      github: "https://github.com/Brandon-Fernando/Inventory-Tracker"
    },
    "Rate My Professor Chatbot": {
      url: "", 
      github: ""
    },
    "AI Customer Support": {
      url: "", 
      github: "https://github.com/Brandon-Fernando/chatsupport"
    },
    "2048 Game": {
      url: "", 
      github: "https://github.com/Brandon-Fernando/2048-Game-Application"
    },
  };

  const handleProjectChange = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <img className={styles.logo} src="/logo.png" alt="logo" />
        </div>

        <div className={styles.links}>
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.layer_one}>
          <h1>Brandon</h1>
          <img src="/star.png" alt="star" />
        </div>
        <div className={styles.layer_two}>
          <h1>Fernando</h1>
        </div>
      </div>
        

      {/* Marquee Divider */}
      <div class={styles.marqueeBox}>
        <div class={styles.marqueeWrapper}>
          <div class={styles.marqueeContent}>
            <span className={styles.marqueeItem}>Front-End Developer</span>
            <img className={styles.marqueeItem} src="/star2.png" alt="star" />
            <span className={styles.marqueeItem}>Designer</span>
            <img className={styles.marqueeItem} src="/star2.png" alt="star" />
            <span className={styles.marqueeItem}>Web Developer</span>
            <img className={styles.marqueeItem} src="/star2.png" alt="star" />
            <span className={styles.marqueeItem}>Front-End Developer</span>
            <img className={styles.marqueeItem} src="/star2.png" alt="star" />
            <span className={styles.marqueeItem}>Designer</span>
            <img className={styles.marqueeItem} src="/star2.png" alt="star" />
            <span className={styles.marqueeItem}>Web Developer</span>
            <img className={styles.marqueeItem} src="/star2.png" alt="star" />
        </div>
      </div>
    </div>


    {/* About */}
    <div class={styles.about}>
      <div class={styles.aboutInfo}> 
        <h1>About</h1>
        <p>Senior at Rutgers University with a blend of skills ranging from software development and team collaboration. Currently seeking opportunities to gain valuable experience within the technology space and grow personally and professionally.</p>
        <button>Resume</button>     
      </div>
      <div class={styles.headshot}>
        <img src="/headshot.png" alt="headshot" />
      </div>
    </div>


    {/* Projects */}
    <h1 className={styles.pTitle}>Projects</h1>
    <div id="projects" className={styles.projects}>
      <div id="left-zone" className={styles.leftZone}>
        <ul className={styles.list}>
          {Object.keys(datas).map((project) => (
            <li key={project} className={styles.item}>
              <input
                type="radio"
                id={`radio_${project}`}
                name="basic_carousel"
                value={project}
                checked={selectedProject === project}
                onChange={() => handleProjectChange(project)}
              />
              <label htmlFor={`radio_${project}`} className={styles[`label_${project}`]}>
                {project}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div id="middle-border" className={styles.middleBorder}></div>

      <div id="right-zone" className={styles.rightZone}>
        {Object.keys(datas).map((project) => (
          <div
            key={project}
            className={`${styles.content} ${
              selectedProject === project ? styles.active : styles.inactive
            } ${styles[`content_${project}`]}`}
          >
            
            <div className={styles.starWrapper}>
              <img src="/star.png" alt="star" className={styles.starImage} />
              <span className={styles.starText}>{project}</span>
            </div>
            <div className={styles.linkContainer}>
            

              <a href={datas[project].github} target="_blank" rel="noopener noreferrer">
                <button className={styles.siteLink}>Visit Site</button>
              </a>
              <i className={`fa-brands fa-github ${styles.githubIcon}`}></i>
            </div>
          </div>
        ))}
      </div>
    </div>

    
    {/* Skills */}
    <h1 className={styles.sTitle}>Skills</h1>
    
    <div className={styles.skillsContainer}>
      <div className={styles.gridItem}>
        <div className={styles.iconWrapper}>
          <i className={`fa-brands fa-java fa-beat ${styles.icon}`}></i>
        </div>
      </div>

      <div className={styles.gridItem}>
        <div className={styles.iconWrapper}>
          <i className={`fa-brands fa-react fa-beat ${styles.icon}`}></i>
        </div>
      </div>
      
      <div className={styles.gridItem}>
        <div className={styles.iconWrapper}>
          <i className={`fa-brands fa-python fa-beat ${styles.icon}`}></i>
        </div>
      </div>
      
      <div className={styles.gridItem}>
        <div className={styles.iconWrapper}>
          <i className={`fa-solid fa-database fa-beat ${styles.icon}`}></i>
        </div>
      </div>
    
      <div className={styles.gridItem}>
        <div className={styles.iconWrapper}>
          <i className={`fa-brands fa-html5 fa-beat ${styles.icon}`}></i>
        </div>
      </div>

      <div className={styles.gridItem}>
        <div className={styles.iconWrapper}>
          <i className={`fa-brands fa-css3-alt fa-beat ${styles.icon}`}></i>
        </div>
      </div>

      <div className={styles.gridItem}>
        <div className={styles.iconWrapper}>
          <i className={`fa-brands fa-js fa-beat ${styles.icon}`}></i>
        </div>
      </div>
    </div>
    
  </div>
  );
}
