import React from "react";

import styles from "./Hero.module.css";
import lav from '../Hero/lav.png'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lavanya</h1>
        <p className={styles.description}>
        As a highly skilled and experienced computer programmer, I am passionate about writing code and developing high-quality software that meets the needs of my clients.
        </p>
        <a href="mailto:lavanyasivashanmugam25@gmail.com" className={styles.contactBtn}>
          CONTACT ME
        </a>
      </div>
      <img
        src={lav}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};