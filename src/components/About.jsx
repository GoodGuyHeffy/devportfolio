import React from 'react';

function About() {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-40">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                <div className="pb-8 ">
                    <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>

                <p className="md:text-xl mt-6">My name is Josh and I'm a self-taught front-end developer.
                    I am 24 years old and origionally from Port Washington, WI. My hobbies outside of coding are Fishing, pretty much anything outdoors, 
                    video games, overlanding, and my pets just to name a few. I have a dog named Mako, a cat named Pooh Bear, and 
                    three African Cichlids named Scooby, Kurama, and Shturman. My Front-End journey has been exciting so far, and I'm even MORE 
                    excited to keep building upon the knowledge that I've gained so far! After I get more settled in the FE
                     area my next goal is to go Full-Stack.
                    </p>

                     <br />

                     <p className="md:text-xl">I'm enthusiastic for front-end frameworks like React and Tailwind.
                     I'm always willing to learn more/refine what I already know,
                     and ready to welcome more skills as they come!</p>

            </div>

        </div>
    )
}


export default About;