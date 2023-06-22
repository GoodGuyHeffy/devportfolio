import React from 'react';
import HeroImage from "../assets/heroImage.png";
import {FaArrowRight} from 'react-icons/fa';

function Home() {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b
         from-black via-black to-gray-800">

          <div className="max-w-screen-lg mx-auto flex flex-col items-center
           justify-center h-full px-4 md:flex-row">

            <div className="flex flex-col justify-center h-full">

                <h2 className="text-4xl sm:text-7xl font-bold text-white">Howdy, I'm Josh</h2>

                <p className="text-gray-500 py-4 max-w-md">
                I'm a Front-End developer who specilizes in front-end frameworks such as React and Tailwind. Lets work together!
                </p>
      
            <div>
               <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center 
               rounded-md bg-gradient-to-r from-green-500 to-green-900 cursor-pointer">
                 Portfolio
                 <span className="group-hover:rotate-90 duration-300">
                   <FaArrowRight className="ml-1" size={25}/>
                 </span>
                </button> 
            </div>
          </div>
            <div>
              <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full duration-200 hover:scale-105"/>
            </div>
          </div>
        </div>
    )
}


export default Home;
 