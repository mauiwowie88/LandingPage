import { useState, useEffect } from 'react';
import bgStars from '../images/stars.png';
import bgMoon from '../images/moon.png';
import bgMountains from '../images/mountains.png';
import bgRockies from '../images/rockies.png';
import '../styles/Bg.css';


function Bg() {
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
        <div>
            <section  onScroll={() => handleScroll} className="overflow-hidden">
                <img src={bgStars} id="stars" alt="stars" />
                <img src={bgMountains} id="mountains" alt="mountains" />
                <img src={bgMoon} id="moon" alt="moon"/>
                <img src={bgRockies} id="rockies" alt="rockies" />
                <h1 id="text">strAPI</h1>
            </section>
        </div>
      )
}

export default Bg;