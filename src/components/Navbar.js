import React from 'react';
import styles from '../styles/Nav.module.css';
import logo from '../images/2.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><img src={logo}></img></div>
      <ul className={styles.navLinks}>
        <li>Use Cases</li>
        <li>Features</li>
        <li>Resources</li>
        <li>Companies</li>
      </ul>
      <button className={styles.ctaButton}>Contact Sales</button>
    </nav>
  );
};

export default Navbar;
