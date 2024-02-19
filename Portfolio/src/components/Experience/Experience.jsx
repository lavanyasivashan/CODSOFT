import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  const getImageUrl = (imageSrc) => {
    try {
      return require(`../../images/${imageSrc}`).default;
    } catch (error) {
      console.error("Image not found:", imageSrc);
      return null;
    }
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
        
          {skills.map((skill, id) => {
            console.log(skill.imageSrc)
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                <h3>{`${skill.title}`}</h3>
                 
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
               
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate}  ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
