import React from 'react';
import './About.css';
import logo1 from'../assests/Vector.png';
import logo2 from'../assests/Vector (1).png';
import logo3 from'../assests/Vector (2).png';

function About() {
    return(
    <div style={{background: 'linear-gradient(90deg, #E0BCF3 0%, #7EE7EE 100%)'}}>
    <div className='area'>
        <div className='imgs'>
        <img src={logo3}  />
        <img src={logo2} />
        <img src={logo1}/>
        </div>
    </div>
    <div className="aboutus">
        <h2>Fruit.Ai</h2>
      <p>Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.</p>
    <button className='bt1'>About</button>
    </div>
    </div>

)}
export default About;