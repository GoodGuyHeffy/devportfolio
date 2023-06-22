import React from 'react';

import bf4 from '../assets/portfolio/bf4.png';
import tarkov from '../assets/portfolio/tarkov.png';
import hunt from '../assets/portfolio/hunt.png';
import nfsheat from '../assets/portfolio/nfsheat.png';
import rainbowsix from '../assets/portfolio/rainbowsix.png';
import divinity from '../assets/portfolio/divinity.png';


function Portfolio() {

     const portfolios = [
        {
            id:1,
            src: bf4
        },
        {
            id:2,
            src: tarkov
        },
        {
            id:3,
            src: hunt
        },
        {
            id:4,
            src: nfsheat
        },
        {
            id:5,
            src: rainbowsix
        },
        {
            id:6,
            src: divinity
        }
     ]



    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full
         text-white md:h-screen">
            
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my projects-----dont have worthy projects yet, so my favorite games will be placeholders for now</p>
            </div>


             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">


             {
                portfolios.map(({id, src}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="escape from tarkov" 
                    className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
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