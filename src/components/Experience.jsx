import React from 'react';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
//import github from '../assets/github.png';
import firebase from '../assets/firebase.png';




function Experience() {

   const tech = [
     {
        id:1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
     },
     {
        id:2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
     },
     {
        id:3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
     },
     {
        id:4,
        src: reactImage,
        title: 'React',
        style: 'shadow-blue-600',
        href: 'https://react.dev',
     },
     {
        id:5,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-400',
        href: 'https://tailwindcss.com',
     },
     /* {
        id:6,
        src: github,
        title: 'GitHub',
        style: 'shadow-gray-400'
     }, */
     {
     id: 7,
     src: firebase,
     title: 'Firebase',
     style: 'shadow-amber-600',
     href: 'https://firebase.google.com',
    }
   ]







    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            
   <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

      <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">These are some of the technologies I have worked with</p>
      </div>
    
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

    {
        tech.map(({id, src, title, style, href}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <a target="_blank" href={href}><img src={src} alt="html image" className="w-20 mx-auto"/></a>
            <p className="mt-4">{title}</p>
        </div>
        ))
    }

    </div>

      </div>
    </div>
    )
}



export default Experience;