import React from 'react';

import notflix from '../assets/portfolio/notflix.png';
import twilight from '../assets/portfolio/twilight.png';



function Portfolio() {
   


     const portfolios = [
        {
            id:1,
            src: twilight,
            info: 'Twilight is an e-commerce site for nightvision and thermal devices. This project uses React and Tailwind, along with Reacts ContextAPI to add cart functionality. ',
            href: 'https://twilightinc.netlify.app/',
            repo: 'https://github.com/GoodGuyHeffy/react-video-site',
        },
        {
            id:2,
            src: notflix,
            info: 'Notflix is a faux movie streaming site. This project uses React, Tailwind and Firebase. I used Firebase to implement user authentication as well as saving users liked movies to their specific account.',
            href: 'https://notflixmovieapp.netlify.app/',
            repo: 'https://github.com/GoodGuyHeffy/netflixclone',
        },
    
       
     ]



    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full
         text-white md:h-screen pt-8">
            
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8">
                <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my projects. Demo and github repo available</p>
            </div>


             <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">


             {
                portfolios.map(({id, src, href, repo, info}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <a target="_blank" href={href}><img src={src} alt="/" className="rounded-md duration-200 hover:scale-105"/></a>
                    <div className="flex flex-col items-center justify-center">
                        <p className='flex m-4 text-sm md:text-base'>{info}</p>
                       <div className='flex'>
                        <a target="_blank"  href={href}><button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 hover:text-green-500">Demo</button></a>
                        <a target="_blank" href={repo} ><button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 hover:text-green-500">Code</button></a>
                        </div>
                    </div>
                </div>
                ))
            } 


             </div>
         </div>

        </div>
    )
}


export default Portfolio;