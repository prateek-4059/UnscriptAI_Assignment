import React from 'react';
import styles from '../styles/Hero.module.css';
import img1 from '../images/3.png'
import img2 from '../images/4.png';
const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Create <span>Professional Videos </span> <br/>in minutes in AI Avatars</h1>
      <p>Transform your text into engaging video content instantly, while saving time and cutting costs.</p>
      <input className="inp1" placeholder='Email' style={{ padding: '10px', borderRadius: '5px', marginRight:'5px' }} />
      <button className={styles.heroButton}>Get a demo</button>

      <br/>
      <br/>

      <img src={img1}></img>

      <br/>
      <br/>

      <h2>Trusted by Over 10,000+ Customers Worldwide</h2>
      <br/>
      <img src={img2} style={{width:'1800px'}}></img>
      </section>
  );
};

export default Hero;
