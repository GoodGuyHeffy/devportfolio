import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';


function Contact() {
    return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Submit the form below or click the icons to get in touch with me.</p>
                <div className='flex justify-center items-center '>
                <BsFillPersonLinesFill size={25} className='mx-2 hover:scale-150 duration-300'/>
                  <a target="_blank" href="https://github.com/GoodGuyHeffy"><AiFillGithub size={25} className='mx-2  hover:scale-150 duration-300'/></a>
                  <a target="_blank" href="https://www.linkedin.com/in/joshhoffert1/"><AiFillLinkedin size={25} className='mx-2 text-blue-500 bg-white rounded  hover:scale-150 duration-300'/></a>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/7cde5dcb-a145-4c46-9b91-37fa019d2193" 
                method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <textarea name="message" rows="10" placeholder="Enter your message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                    <button className="text-white bg-gradient-to-b from-green-500 to-green-900 px-6 py-3 my-8 mx-auto
                     flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
                </form>
            </div>

        </div>
    </div>
    )
}




export default Contact;