import { useState, useEffect } from 'react';import '../styles/App.css';
import Navbar from './Navbar';
import bgStars from '../images/stars.png';
import visualizer from '../images/visualizer.gif';
import rm from '../images/rm.png';

function Installation() {

  const handleScroll = () => {
    let value = window.scrollY;
    const stars = document.getElementById('stars');
    stars.style.top = value * 0.25 + 'px';
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <div onScroll={() => handleScroll} className="">
      <Navbar />

      <div className="mt-40">
        <img src={bgStars} id="stars"/>
        <h1 className="text-6xl text-center text-white mt-60">
            Installation
        </h1>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <div className=' flex flex-wrap p-8 py-12 sm:p-12 rounded-3xl bg-slate-900 bg-slate-800 shadow-2xl outline outline-1 outline-slate-700 bg-opacity-50 shadow-2xl shadow-cyan-500/10'>
            <img className=" place-items-center" src={visualizer} />
            <a href="https://www.youtube.com/watch?v=zL19uMsnpSU">https://youtube.com/watch?v=zL19uMsnpSU</a>
          </div>
          <div className='flex flex-wrap p-8 py-12 sm:p-12 rounded-3xl bg-slate-900 bg-slate-800 shadow-2xl outline outline-1 outline-slate-700 bg-opacity-50 shadow-2xl shadow-cyan-500/10x'>
            <img className="align-center" src={rm} />
            <a className ="text-white" href="https://github.com/oslabs-beta/strapi">https://github.com/oslabs-beta/strapi</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Installation