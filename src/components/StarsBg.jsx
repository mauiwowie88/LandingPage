import { useState, useEffect } from 'react';
import bgStars from '../images/stars.png';
import '../styles/StarsBg.css';


function StarsBg() {
    const handleScroll = () => {
        let value = window.scrollY;
        const stars = document.getElementById('stars');
        const moon = document.getElementById('moon');
        const text = document.getElementById('text'); 
    
        stars.style.left = value * 0.25 + 'px';
        moon.style.top = value + 'px';
        text.style.marginLeft = value * 2 + 'px';
      }
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      });
    
    
      return (
        <div className=''>
            <section  onScroll={() => handleScroll} className="overflow-hidden">
                <img src={bgStars} id="stars" alt="stars" />
            </section>
        </div>
      )
}

export default StarsBg;