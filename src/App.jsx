import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Services from './component/Services'
import Works from './component/Works'
import Resume from './component/Resume'
import Skills from './component/Skills'
import Contact from './component/Contact'
import Footer from './component/Footer'
import HomeIcon from './component/HomeIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1 className='text-7xl'>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    <div >
      <Navbar></Navbar>
      <div className='px-4 md:px-0'>
        <Banner></Banner>
      </div>
      <div className=''>
        <Services></Services>
      </div>
      <div className='px-4 md:px-0'>
        <Works></Works>
      </div>
      <div className='bg-[#F6F3FC] px-4 md:px-0' id='resume'>
        <Resume></Resume>
      </div>
      <div className='py-[70px] lg:py-24' id='skills'>
        <Skills></Skills>
      </div>
      <div className='bg-[#F6F3FC] py-24 lg:py-28 ' id='contact'>
        <Contact></Contact>
      </div>
      <div>
        <HomeIcon></HomeIcon>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
