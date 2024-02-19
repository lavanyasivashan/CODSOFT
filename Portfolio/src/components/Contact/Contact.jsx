import React from "react";
import { MdEmail } from 'react-icons/md';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>CONTACT</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
      <li className={styles.link}>
      <MdEmail className={styles.icon} />
      <a href="mailto:lavanyasivashanmugam25@gmail.com">lavanyasivashanmugam25@gmail.com</a>
    </li>
    <li className={styles.link}>
      <a href="https://www.linkedin.com/lavanya-sivashanmugam-7172ba252/">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/lavanya-sivashanmugam-7172ba252/">linkedin.com/lavanya-sivashanmugam</a>
    </li>
    <li className={styles.link}>
      <a href="https://www.github.com/lavanyasivashan">
        <FaGithub className={styles.icon} />
      </a>
      <a href="https://www.github.com/lavanyasivashan">github.com/lavanyasivashan</a>
    </li>
      </ul>
    </footer>
  );
};