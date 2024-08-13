import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Services from './component/Services'
import Works from './component/Works'
import Resume from './component/Resume'
import Skills from './component/Skills'
// import Contact from './component/contact'
// import Contact from './component/Contact'
import ReachOut from './component/ReachOut'
import Footer from './component/Footer'
import HomeIcon from './component/HomeIcon'

function App() {

  return (
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
        {/* <Contact></Contact> */}
        <ReachOut></ReachOut>
      </div>
      <div>
        <HomeIcon></HomeIcon>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
