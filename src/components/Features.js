import React from 'react';
import styles from "../styles/features.module.css";
import img3 from "../images/5.png";
import img4 from "../images/6.png";
import img5 from "../images/7.png";
import img6 from "../images/8.png"

const Features = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0 auto' }}>
    <div className='main1' style={{ width: '2500px', height: '600px', padding: '200px', margin: '0 25%' }}>
        <div className='left' style={{ float: 'left', fontSize: '50px', padding: '100px' }}>
            <h1><span>Minutes,</span> not hours</h1>
            <p>No need for lengthy processes like filming, editing,<br /> or storyboarding</p>
            <button style={{ padding: '10px', fontSize: '40px' }}>Discover more</button>
        </div>
        <div className='right' style={{ float: 'right', padding: '70px' }}>
            <img src={img3} style={{ height: '700px', width: '1000px' }} alt="Description" />
        </div>
    </div>
    <br />
    <br />

    <div className='main1' style={{ width: '2500px', height: '600px', padding: '200px', margin: '0 25%' }}>
        <div className='left' style={{ float: 'right', fontSize: '50px', padding: '100px' }}>
            <h1><span>80%</span> cost reduction</h1>
            <p>Eliminate the need for expensive equipment,<br />location rentals, and professional videographer,<br /> reducing <b>overall production costs</b></p>
            <button style={{ padding: '10px', fontSize: '40px' }}>Discover more</button>
        </div>
        <div className='right' style={{ float: 'left', padding: '70px' }}>
            <img src={img4} style={{ height: '600px', width: '1000px' }} alt="Description" />
        </div>
    </div>
    <br />
    <br />
    <div className='main1' style={{ width: '2500px', height: '600px', padding: '200px', margin: '0 25%' }}>
        <div className='left' style={{ float: 'left', fontSize: '50px', padding: '100px' }}>
            <h1><span>80%</span> cost reduction</h1>
            <p>Eliminate the need for expensive equipment,<br />location rentals, and professional videographer,<br /> reducing <b>overall production costs</b></p>
            <button style={{ padding: '10px', fontSize: '40px' }}>Discover more</button>
        </div>
        <div className='right' style={{ float: 'right', padding: '70px' }}>
            <img src={img5} style={{ height: '600px', width: '1000px' }} alt="Description" />
        </div>
    </div>
    <br />
    <br />
    <div className='main1' style={{ width: '2500px', height: '600px', padding: '200px', margin: '0 25%' }}>
        <div className='left' style={{ float: 'right', fontSize: '50px', padding: '100px' }}>
            <h1><span>80%</span> cost reduction</h1>
            <p>Eliminate the need for expensive equipment,<br />location rentals, and professional videographer,<br /> reducing <b>overall production costs</b></p>
            <button style={{ padding: '10px', fontSize: '40px' }}>Discover more</button>
        </div>
        <div className='right' style={{ float: 'left', padding: '70px' }}>
            <img src={img6} style={{ height: '600px', width: '900px' }} alt="Description" />
        </div>
    </div>
    <br />
    <br />
</div>

  );
};

export default Features;
