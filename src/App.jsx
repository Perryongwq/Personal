import './App.css';
import background from "./assets/background_pic.jpg";
import Photobg from "./assets/small.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import lk from "./assets/linkedin.svg";
import { useEffect, useState } from 'react';
import arrowdown from "./assets/arrow-down.svg";
import gitsvg from "./assets/github-mark.svg";
import resume from "./assets/Perry_Resume.pdf";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className='max-w-4xl m-auto relative'>
    <header className={`${scrolling ? 'border-b border-gray-900' :''} fixed left-0 right-0 top-0 z-20`} id="home">
      <div className='container m-auto px-4 py-6 max-w-4xl bg-black'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between item-center'>
          <div>
            <h1 className='font-bold text-2xl'>Perry Portfolio</h1>
          </div>
          <div>
            <ul className='flex gap-4'>
              <li>
                <a href="#projects" className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
              </li>
              <li>
                <a href="#Programming" className='text-gray-400 hover:text-white cursor-pointer'>Programming Language</a>
              </li>
              <li>
                <a href="#aboutme" className='text-gray-400 hover:text-white cursor-pointer'>About Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <main className='relative mt-28'>
      {/* intro section */}
      <section>
        <div className='container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left'>
          <div>
            <h2 className='font-bold text-4xl'>Hello, I am Perry </h2>
            <div>
            <h2 className="font-bold text-4xl mt-1 gradiant-text">Software Engineer</h2>
            </div>
            <div>
              <p className='mt-4 text-gray-400'>Currently, working as an Software Engineer/ Rationalization Engineer in Murata Electronic Singapore.
              In addition, I am also pursuing a part-time Master's Degree in Artificial Intelligence at Nanyang Technological University(NTU). 
              My journey in the realm of AI and machine learning blends academic rigor with practical experimentation, 
              focusing on the intersection of advanced AI methodologies and real-world applications. </p>

              <div className='flex gap-4 mt-5'>              
              <a href={resume} download="Perry_Resume.pdf" className='flex items-center justify-center px-8 py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>
                 Download Resume </a>
              <a href="https://www.linkedin.com/in/wen-qing-ong/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center px-8 py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>
              <img src={lk} className="w-5 h-5 mr-2"/>
              LinkedIn</a>
              <a href="https://github.com/Perryongwq" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center px-8 py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>
              <img src={gitsvg} className="w-5 h-5 mr-2"/>
              Github</a>

              </div>
              
            </div>
          </div>
          <div className='relative'>
            <img src={background}  className='relative z-10 rounded-full w-[85%]'></img>
          </div>
        </div>
      </section>
      <section id="projects">
        {/* Project Section */}
        <div className ='container mx-auto px-4 '>
          <h2 className='text-2xl font-semibold py-5'>
            Projects
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className='border border-gray-500 rounded-md p-5 flex flex-col'>
              <img src ={Project1} className='w-auto h-auto mb-4'/>
              <div className='flex flex-col space-y-2'>
                <h3 className='text-2xl-semibold mb-6'>Computer Vision: Image Translation with implementation of CycleGans </h3>
                <p className='text-gray-400 text-sm'> Application of CycleGAN for translating images between the synthetic environment of the Grand Theft Auto V (GTA5) video game and the realistic urban scenes of the Cityscapes dataset.</p>
              </div>
              <div>
                <button className='w-full text-sm py-3 mt-5 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout Github</button>
              </div>
            </div>
            <div className='border border-gray-500 rounded-md p-5 flex flex-col'>
            <img src ={Project2} className='w-full h-auto mb-4'/>
            <div className='flex flex-col space-y-2'>
                <h3 className='text-2xl-semibold mb-6'>Neuro Evoluation and Fuzzy Intelligence: Time Series Stock Prediction </h3>
                <p className='text-gray-400 text-sm'> Use of Hybrid AI Model-Dynamic Evolving Neural Fuzzy Inference System (DENFIS) and compare with Portfoilo Muliplicative Returns of Benchmark Model (LSTM & ANFIS)</p>
            </div>
              <div >
              <a href="https://github.com/Perryongwq/Neuro-Evoluation-and-Fuzzy-Intelligence-Time-Series-Stock-Prediction" target="_blank" rel="noopener noreferrer" className='w-full text-sm py-3 mt-5 border rounded-full hover:border-blue-500 hover:text-blue-500 block text-center'>Checkout Github</a>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 py-5'>
            <div className='border border-gray-500 rounded-md p-5 flex flex-col'>
            <img src ={Project3} className='w-full h-auto mb-4'/>
              <div className='flex flex-col space-y-2'>
                <h3 className='text-2xl-semibold mb-6'>Natural Language Processing: Study on Linear Attention Mechanism for NLP Task</h3>
                <p className='text-gray-400 text-sm '> Examines the replacement of full softmax attention with linear attention in NLP tasks, particularly on text classification of Amazon reviews.</p>
              </div>
              <div >
              <a href="https://github.com/Perryongwq/NLP-Study-on-Linear-Attention-Mechanism" target="_blank" rel="noopener noreferrer" className='w-full text-sm py-3 mt-5 border rounded-full hover:border-blue-500 hover:text-blue-500 block text-center'>Checkout Github</a>
              </div>
            </div>

            <div className='border border-gray-500 rounded-md p-5 flex flex-col'>
            <img src ={Project4} className='w-full h-auto mb-4'/>
            <div className='flex flex-col space-y-2'>
              <h3 className='text-2xl-semibold mb-6'>Modern Image Gallery </h3>
              <p className='text-gray-400 text-sm'>The website presents a modern image gallery utilizing Vite and React, showcasing interactive and structured image displays while highlighting efficient web development techniques.</p>
            </div>
              <div>
              <a href="https://image-gallery-git-main-perryongwq.vercel.app/" target="_blank" rel="noopener noreferrer" className='w-full text-sm py-3 mt-5 border rounded-full hover:border-blue-500 hover:text-blue-500 block text-center'>Checkout Website</a>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Technology portion */}
        <section className='py-10' id="Programming">
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Programming Language Proficiency </h2>
            <div className='mt-14'>

              <div>
                <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>Python, Machine-Learning</h2>
                <p className='text-gray-500'>Advanced</p>
              </div>
              <span className='w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md'></span>
            </div>
            <div className='mt-8'>
                <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>Javascripts, React.js</h2>
                <p className='text-gray-500'>Intermediate</p>
              </div>
              <span className='w-[40%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md'></span>
            </div>
            <div className='mt-8'>
                <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>HTML, TailwindCSS, CSS</h2>
                <p className='text-gray-500'>Intermediate</p>
              </div>
              <span className='w-[40%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md'></span>
            </div>
          </div>
          </div>
        </section>
        {/* tech and other skills */}
        <section>
          {/* About me */}
          <div className='container m-auto px-4 py-10'>
          <h2 className='text-2xl font-semibold'>Additional Skills</h2>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]'>
            <div>
              <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>Analytic skills</p>
            </div>
            <div>
            <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>3D Printer operation and Design</p>
            </div>
            <div>
            <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>Teamwork</p>
            </div>
          </div>
          </div>
        </section>
        <section className='py-8' id="aboutme">
          <div className='container m-auto px-4'>
          <h2 className='text-2xl font-semibold'>About Me</h2>
          <div className='mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white'>
            <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] '>
              <h3 className='absolute -left-10 text-lg font-semibold'>2021</h3>
            <p>Graduate from Nanyang Technological University with a Bachelor of Engineering in Material Engineering.
              Employed as Process Engineer in Murata Electronic Singapore for Front Process in Ceramic Capacitor Production.
            </p>
            </div>
            <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] '>
              <h3 className='absolute -left-10 text-lg font-semibold'>2022</h3>
            <p>Erolled as Master student in Artificial Intelligence of Nanyany Technological University of Singapore (NTU).</p>
            </div>
            <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] '>
              <h3 className='absolute -left-10 text-lg font-semibold'>2023</h3>
            <p>Job Rotate from Process Engineer to Relationization / Software Engineer. Main role in develop AI software and develop innovative manufauturing solution
              for Murata Electonic Singapore. </p>
            </div>
            <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] '>
              <h3 className='absolute -left-10 text-lg font-semibold'>2023</h3>
            <p>Currently, upskill to learn Full-Stack development for AI deployment and smart UI design for ease of users operation</p>
            </div>
          </div>
          </div>
        </section>
    </main>
    <footer>
      <div className='container m-auto flex justify-between px-4 py-6'>
        <div>
          <p className='text-gray-300 text-sm'>Copy Right @2023</p>
        </div>
        <div>
          <ul className='flex gap-6 '>
            <li>
              <a href='https://www.linkedin.com/in/wen-qing-ong/' target="_blank" rel="noopener noreferrer"> 
                <img src={lk} className='w-5'/></a>
            </li>
            
          </ul>
        </div>
      </div>
    </footer>
    {
      scrolling && (
        <button className='fixed block right-8 bottom-0 w-24'onClick={()=>{
        window.scrollTo(0,0);
        }}>
          <img src={arrowdown}/>
        </button>
      )
    }

   </div>
  )
}

export default App
