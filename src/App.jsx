import './App.css'
import {Link} from 'react-scroll'
import Profile from "./assets/profilepic.jpg"

import Proj1 from "./assets/news.jpeg"
import Proj2 from "./assets/todo.jpg"
import Proj3 from "./assets/CodeCraft.jpeg"
import linkedinn from "./assets/linkedinn.png"
import github from "./assets/github.png"
import resume from "./assets/resume.pdf"
import insta from "./assets/instagram.png"
import { useState } from 'react';
function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
  <div className="container m-auto px-6 py-6">
    <div className="flex justify-between items-center">
      <div className="p-2 bg-gray-100 rounded-md shadow-sm">
        <h1 className="font-bold text-xl text-gray-800">Sathyanarayanan</h1>
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-gray-800">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row gap-4">
          <li>
            <Link to="project" spy={true} smooth={true} offset={-50} duration={1500} className="text-gray-800 hover:text-gray-600 cursor-pointer hover:underline underline-offset-4 hover:transition delay-150 duration-300 ease-in-out" onClick={closeMenu}>PROJECTS</Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true} offset={-50} duration={1500} className="text-gray-800 hover:text-gray-600 cursor-pointer hover:underline underline-offset-4 hover:transition delay-150 duration-300 ease-in-out" onClick={closeMenu}>SKILLS</Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={50} duration={1500} className="text-gray-800 hover:text-gray-600 cursor-pointer hover:underline underline-offset-4 hover:transition delay-150 duration-300 ease-in-out" onClick={closeMenu}>ABOUT</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>

      <main>
        <section>
          <div className="container m-auto px-4 pt-12 sm:py-32 flex flex-col sm:flex-row gap-6" >
            <div>
              <h2 className='font-bold text-xl font-style'>Hello,<br /> I'm Sathyanarayanan</h2>
              <h2 className='font-bold text-2xl mt-1 gradient-text running-text font-display'>MERN Stack Developer</h2>
              <p className='mt-4 text-gray-400 mb-10'>Crafting dynamic web experiences with MERN, transforming ideas into immersive digital realities</p>
              <a href={resume} download="resume.pdf" target="_blank" className=" hover:bg-blue-500  text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Download CV
              </a>
              <a href="mailto:sathyattl2002@gmail.com" target="_blank" className=" hover:bg-blue-500  text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-9">
                Contact Info 
              </a>
            </div>
            <div className='relative'>
              <img className='p-3 ml-2 rounded-s-full border-2 rounded-e-full border-cyan-400 relative z-10 w-[220px] m-auto sm:w-[420px]' src={Profile} alt="" />

             
            </div>
          </div>
        </section>

        {/*Project SECTION */}
        <section>
          <div className="container m-auto px-6 sm:py-12" id='project'>
            <h2 className='text-4xl font-semibold mt-6'>Projects</h2>
            <div className='flex flex-col sm:flex-row gap-10 mt-11' >
              <div className='border p-5 border-cyan-400 rounded-md flex-1'>
                <img src={Proj1} alt="" className='rounded-md w-full h-3/6' />
                <h3 className='text-2xl font-semibold mt-8'>News-App</h3>
                <p className='text-gray-400 text-sm mt-2'>A responsive News Application, Get the latest news from around the world. Choose from categories like Technology, Health, and Business to customize your news feed. (REACT AND BOOTSTRAP)</p><br /><br />
                <div className="flex mt-11 gap-2 " >
                  <button onClick={(e) => {
                      e.preventDefault();
                      window.location.href='https://main--clever-kelpie-bb4c4b.netlify.app/';
                      }}
                  className='px-4 py-2 flex-1 border rounded-full bg-gradient-to-t from-blue to-indigo-900 cursor-pointer hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                  <button onClick={(e) => {
                      e.preventDefault();
                      window.location.href='https://github.com/sathya262/News-app';
                      }}
                  className='px-4 py-2 flex-1 border rounded-full cursor-pointer hover:border-blue-500 hover:text-blue-500'>Checkout GitHub</button>
                </div>

              </div>
              
              
              <div className='border p-5 border-cyan-400 rounded-md flex-1'>
                <img src={Proj2} alt="" className='rounded-md w-full h-3/6' />
                <h3 className='text-2xl font-semibold mt-8'>To-Do List</h3>
                <p className='text-gray-400 text-sm mt-2'>A simple Todo List app built with HTML, CSS, and JavaScript. <br /><br /><br /><br /><br />
</p>
                <div className="flex mt-16  gap-2" >
                  <button onClick={(e) => {
                      e.preventDefault();
                      window.location.href='https://exquisite-gaufre-62d8a1.netlify.app/';
                      }} className='px-4 py-2 flex-1 border rounded-full bg-gradient-to-t from-white-500 to-indigo-900 cursor-pointer hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                  <button onClick={(e) => {
                      e.preventDefault();
                      window.location.href='https://github.com/sathya262/To-Do-list';
                      }} className='px-4 py-2 flex-1 border rounded-full cursor-pointer hover:border-blue-500 hover:text-blue-500'>Checkout GitHub</button>
                </div>

              </div>

              <div className='border p-5 border-cyan-400 rounded-md flex-1'>
                <img src={Proj3} alt="" className='rounded-md w-full h-3/6' />
                <h3 className='text-2xl font-semibold mt-8'>ChatGPT Lessonplanner</h3>
                <p className='text-gray-400 text-sm mt-2'>The "CHATGPT Lesson Planner" is a web tool that helps teachers quickly create detailed and engaging lesson plans. It saves time, offers smart suggestions, and allows easy customization for different grade levels.<br /> <b className='text-white'>(MERN STACK and Open AI)</b>
</p>
                <div className="flex mt-16  gap-2" >
                   <button onClick={(e) => {
                      e.preventDefault();
                      window.location.href='https://chatgptdemo.galaxyweblinks.com';
                      }} className='px-4 py-2 flex-1 border rounded-full bg-gradient-to-t from-blue to-indigo-900 cursor-pointer hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                  <button onClick={(e) => {
                      e.preventDefault();
                      window.location.href='https://github.com/sathya262/gpt_lessonplanner';
                      }} className='px-4 py-2 flex-1 border rounded-full cursor-pointer hover:border-blue-500 hover:text-blue-500'>Checkout GitHub</button> 
                </div>

              </div>

            </div>
            
          </div>
          
        </section>

        <section className='mt-12 ' id='skills' >
          <div className="container m-auto px-6 " style={{background:"white",borderRadius:"30px"}} >
            <h2 className='text-4xl font-semibold mb-3 '  style={{color:"black"}}>Skills</h2>
            <h1 className='text-3xl font-semibold gradient-title '>Front-End Development</h1>
            <div className='mt-8 border p-5 border-cyan-400 rounded-md'  style={{color:"black"}}>
            <div>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>HTML</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-full h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>

            <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>CSS,Bootstrap</h2>
              <p className='text-gray-500'>Intermediate</p>
            </div>
            <span className='w-[75%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>

            <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>Javascript, JQuery</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-[85%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>

            <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className='font-semibold'>React Js</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-[85%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>
              
           
          </div>
        </div>
          
        <div className='container m-auto px-6' style={{background:"white",borderRadius:"30px"}}>
            <h1 className='text-3xl font-semibold gradient-title mt-10'>Back-End Development</h1>
            <div className='mt-8 border p-5 border-cyan-400 rounded-md' style={{color:"black"}}>
              <div>
                <div className='flex justify-between items-center' >
                  <h2 className=' font-semibold'>GIT & GITHUB</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
              </div>

              <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>Mongo DB</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-[90%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>

            <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>Express Js</h2>
              <p className='text-gray-500'>Intermediate</p>
            </div>
            <span className='w-[85%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>
             
             <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>Node Js</h2>
              <p className='text-gray-500'>Intermediate</p>
            </div>
            <span className='w-[84%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>

            </div>

        </div>
        </section>

        {/*Additional Skills*/ }
        <section>
           <div className='container m-auto px-6 py-14' >
            <h2 className='text-3xl font-semibold'>Additional Technologies and Skills</h2>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[50%]'>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-6 '>C</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-6 '>Java</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-6 '>MySQL</p>
              </div>
               <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-6 '>OOPS</p>
              </div>
            </div>
           </div>
        </section>

        <section className='py-8'>
          <div className="container m-auto px-6 py-6" style={{background:"white",color:"black",borderRadius:"30px"}}>
            <h2 className='text-3xl font-semibold'>About Me</h2>
            <div className='mt-12 ml-16 relative  before:absolute before:top-0 before:left-12 before:bottom-2 before:w-1 before:bg-black'>
              
              
              <div className='pl-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[42px] mb-10'>
                <h3 className='absolute -left-9 text-lg font-semibold'>Till</h3>
                <p className='text-justify'>Greetings! I'm Sathyanarayanan, a passionate MERN stack developer dedicated to crafting seamless digital experiences. With expertise in MongoDB, Express.js, React, and Node.js, I blend creativity with functionality to build robust applications. I thrive on collaboration and continuous learning, always striving to push the boundaries of technology. Let's embark on this journey together and build something extraordinary!</p>
              </div>
              <div className='pl-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[42px] mb-10'>
                <h3 className='absolute -left-9 text-lg font-semibold'>2022-24</h3>
                <p>Graduated Master of Computer Applications in Mepco Schlenk Engineering College.</p>
              </div>
              <div className='pl-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[42px] '>
                <h3 className='absolute -left-9 text-lg font-semibold'>2019-22</h3>
                <p>Graduated Bachelor of Computer Applications at AJ college</p>
              </div>
              
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-8 py-6 " id='about' style={{background: "radial-gradient(circle at 10% 20%, rgb(242, 235, 243) 0%, rgb(234, 241, 249) 90.1%)",borderRadius:"60px"}}>
            <div>
              <p className='text-gray-300 text-sm' style={{color:"black"}}>Copyright © sathya</p>
            </div>
            <div>
              <ul className="flex gap-6"> 
                <li>
                  <a className='cursor-pointer' href='https://github.com/sathya262'> <img src={github} className='h-7' /></a>
                </li>
                <li>
                  <a className='cursor-pointer' href='https://www.instagram.com/frenz__call_me_sathya?igsh=MWg0Y3RwOTl0OGdteA=='> <img src={insta} className='h-7' /></a>
                </li>
          
                <li>
                  <a className='cursor-pointer' href='https://www.linkedin.com/in/sathya-s-9b5a42265/'> <img href="" src={linkedinn} className='h-8' /></a>
                </li>
  
              </ul>
            </div>
        </div>
      </footer>
    </>
  )
}

export default App
