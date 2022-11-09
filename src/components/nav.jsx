import React, { Component } from 'react';

const Nav = () => {
        
    return (
            <div className="bg-zinc-100 shadow-md flex justify-center md:justify-between items-center px-6 py-3 fixed top-0 right-0 left-0">
                <h1 className="text-lg font-medium hidden md:block"> Amy Vu </h1>
                <div className="flex items-center">
                    <button onClick={() => document.getElementById('about-me').scrollIntoView({behavior: "smooth"})} 
                        className="pl-4 text-zinc-800 font-medium transition duration-50 hover:text-zinc-500">
                        About </button>
                    <button onClick={() => document.getElementById('projects').scrollIntoView({behavior: "smooth"})} 
                        className="pl-4 text-zinc-800 font-medium transition duration-50 hover:text-zinc-500">
                        Projects </button>
                    <button onClick={() => document.getElementById('contact-me').scrollIntoView({behavior: "smooth"})} 
                        className="pl-4 text-zinc-800 font-medium transition duration-50 hover:text-zinc-500">
                        Contact </button>
                    <a href="https://docs.google.com/document/d/1xcvsQ6Xp8mV4zG7rozNoHUc7MnBDKrufeBlWuta1dEE/edit?usp=sharing" target="_blank">
                        <button className="ml-4 bg-zinc-600 transition duration-50 hover:bg-zinc-700 text-white py-1 px-4 rounded-full">Resume</button>
                    </a>
                </div>
            </div>
        );
}
 
export default Nav;
