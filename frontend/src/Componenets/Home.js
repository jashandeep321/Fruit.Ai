import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import translate from '../assests/g_translate.png';
import './Home.css';

function Home() {
  // Array of objects containing the content and background color for each div
  const data = [
    { content: 'Chat.', bgColor: '#FFE5C2',shadow:'#FFC499',color:'#C84AD3',link:'/chat' },
    { content: '', bgColor: '#C2FFD0',shadow:'',color:'' },
    { content: '', bgColor: '#EFFFC2',shadow:'',color:'' },
    { content: '', bgColor: '#C2F0FF',shadow:'#99EDFF', image:translate, color:'',link:'/translate'},
    { content: 'FAQs', bgColor: '#E4CAFF',shadow:'#D299FF',color:'#3B5998',link:'/FAQs' },
    { content: 'About', bgColor: '#FFC2F2',shadow:'#FF99F5',color:'#C84AD3',link:'/About' },
  ];

  return (
    <div style={{background: 'linear-gradient(90deg, #E0BCF3 0%, #7EE7EE 100%)', minHeight:'100vh'}}>
      <h1 className='text' style={{paddingTop:'50px'}}>Fruit.Ai</h1>
      <p className='text' style={{paddingTop:'5px'}}>“Be Healthy!”</p>
    <div className="div-container">
      {data.map((div, index) => (
        <div key={index} className="box" 
        style={{ backgroundColor: div.bgColor, 
          color:div.color, 
          boxShadow: div.shadow ? ` 5px 5px 16px rgba(255, 255, 255, 0.5),inset 4px 0 15px ${div.shadow}` : 'none', 
        filter: !div.content && !div.image ? 'blur(5px)' : 'none',
        }}>
          
         <Link to={div.link}> {div.content} 
         <img src={div.image}/>
         </Link>
        </div>
      ))}
    </div>
    
    </div>
  );
}

export default Home;
