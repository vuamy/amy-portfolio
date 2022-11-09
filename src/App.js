import React from "react";
import Nav from './components/nav.jsx';
import Footer from './components/footer.jsx';
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function App() {
  return (
    <div className="bg-zinc-50">
      <Nav/>

      <main className="pt-12">
        <section className="text-center p-10 mt-12">
          <h2 className="text-3xl font-semibold"> Hi! I'm Amy Vu </h2>
          <h3 className="text-lg"> Frontend Designer & Developer </h3>
        </section>
        
        <div id="about-me"></div>

        <section className="text-center p-10 mt-10">
          <h2 className="text-2xl font-semibold py-2">About Me</h2>
          <h3 className="text-lg font-medium py-2 text-zinc-800">I am a front-end developer based in San Jose, California.</h3>
          <p className="px-3 py-2 max-w-xl m-auto">I graduated in 2022 with a computer science degree from Santa Clara University. I am always interested in 
            expanding my knowledge on web development and design. My passion in front-end stems from its ability to combine the art that I 
            love and the technology I admire. I hope to create interfaces that push the boundaries of what we consider technology today.
          </p>
          <h3 className="text-lg font-medium py-2 mt-8"> My Skills Include: </h3>
          <ul className="p-1">
            <li>HTML5 and CSS</li>
            <li>Javascript and React</li>
            <li>SASS, TailwindCSS, and Bootstrap</li>
            <li>Git and Github</li>
          </ul>
        </section>

        <div id="projects"></div>

        <section className="text-center p-10 mt-10">
          <h2 className="text-2xl font-semibold py-2 mb-5"> Projects </h2>
          <div className="flex justify-center">
            <div className="p-5 shadow-md bg-zinc-800 text-white flex flex-col rounded-md max-w-md">
              <h4 className="text-lg font-medium text-left"> KSCU Website </h4>
              <img className="p-5 items-center" src="/kscu-web.png" alt="Homepage of KSCU Website"></img>
              <div className="flex justify-end">
                <button className="py-1 px-3 ml-3 text-zinc-800 bg-zinc-100 rounded-full font-medium transition duration-50 hover:bg-zinc-300">Website</button>
                <a href="https://github.com/KSCU-radio/kscu-site" target="_blank">
                  <button className="py-1 px-3 ml-3 text-zinc-800 bg-zinc-100 rounded-full font-medium transition duration-50 hover:bg-zinc-300">Github</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div id="contact-me"></div>

        <section className="text-center p-10 my-10">
          <h2 className="text-2xl font-semibold mb-5"> Contact Me </h2>
            <p className="py-1"> Email: amy.anvu@gmail.com </p>
            <p className="py-1"> Phone: (669) 238-5230 </p>
            <h3 className="py-1"> Socials: </h3>
            <div className="flex justify-center text-2xl">
              <a href="https://github.com/vuamy" target="_blank">
                <FaGithub className="mx-1 text-zinc-900 hover:text-zinc-600 hover:cursor-pointer"/>
              </a>
              <a href="https://www.linkedin.com/in/amy-vu-9808a1252/" target="_blank">
                <FaLinkedin className="mx-1 text-zinc-900 hover:text-zinc-600 hover:cursor-pointer"/>
              </a>
            </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
