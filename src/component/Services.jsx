import Aos from 'aos';
import { useState } from 'react';
import { ImArrowUpRight2 } from 'react-icons/im';

const Services = () => {
    const [number, setNumber] = useState(1);

    const handleMouseEnter = (x) => {
        setNumber(x)
    }

    const handleMouseOut = () => {
        setNumber(1)
        Aos.refresh();
    }

    return (
        <div className='bg-[#F6F3FC] px-4 md:px-0 pb-24' id='services'  data-aos="fade-up" data-aos-duration="2000">
            <div className='container mx-auto'>
                <div className='text-center pt-28 lg:pt-36 pb-9 lg:pb-10'>
                    <h2 className='gradient-text text-3xl md:text-4xl lg:text-5xl font-bold' data-aos="fade-up" data-aos-duration="3000">My Quality Services</h2>
                    <p className='w-full max-w-[700px] mx-auto mt-3.5' data-aos="fade-up" data-aos-duration="3000">Delivering top-notch development with cutting-edge technology, ensuring high performance, reliability, and exceptional user experiences in every project.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <div  onMouseLeave={() => handleMouseOut(1)} onMouseEnter={() => handleMouseEnter(1)} className={`${number === 1 ? `bg-gradient-to-r from-[#7544D8] to-[#321962] text-white transition-all duration-500` : 'text-[#7544D8]'} flex flex-col md:flex-row justify-around md:items-center h-32 md:h-28 border-b-2 border-[#DDDDDD] py-2 md:py-0 z-50`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center lg:gap-4 '>
                                <h4 className='text-xl font-semibold mx-3 lg:mx-0'>01</h4>
                                <h2 className='text-2xl lg:text-3xl w-[240px] lg:w-[300px] font-semibold'>Front-End Fusion</h2>
                            </div>
                            <i className={`${number === 1 ? 'rotate-0 transition-all duration-150' : 'rotate-90'} text-2xl px-3 lg:px-0 md:hidden`}><ImArrowUpRight2 /></i>
                        </div>
                        <p className={`w-full max-w-[600px] pl-3 pb-2 md:pl-0 md:pb-0 ${number === 1 ? 'text-white transition-all duration-500' : 'text-black'} text-sm lg:text-base`}>Crafting seamless, dynamic user interfaces with cutting-edge technologies, ensuring an engaging and intuitive web experience</p>
                        <i className={`${number === 1 ? 'rotate-0 transition-all duration-150' : 'rotate-90'} text-2xl px-3 lg:px-0 hidden md:block`}><ImArrowUpRight2 /></i>
                    </div>

                    <div onMouseLeave={() => handleMouseOut(2)} onMouseEnter={() => handleMouseEnter(2)} className={`${number === 2 ? `bg-gradient-to-r from-[#7544D8] to-[#321962] text-white transition-all duration-500` : 'text-[#7544D8]'} flex flex-col md:flex-row justify-around md:items-center h-32 md:h-28 border-b-2 border-[#DDDDDD] duration-00 transition-all py-2 md:py-0`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center lg:gap-4 '>
                                <h4 className='text-xl font-semibold mx-3 lg:mx-0'>02</h4>
                                <h2 className='text-2xl lg:text-3xl w-[240px] lg:w-[300px] font-semibold'>JavaScript Jolt</h2>
                            </div>
                            <i className={`${number === 2 ? 'rotate-0 transition-all duration-150' : 'rotate-90'} text-2xl px-3 lg:px-0 md:hidden`}><ImArrowUpRight2 /></i>
                        </div>
                        <p className={`w-full max-w-[600px] pl-3 pb-2 md:pl-0 md:pb-0 ${number === 2 ? 'text-white transition-all duration-500' : 'text-black'} text-sm lg:text-base`}> Empowering your projects with cutting-edge JavaScript solutions for dynamic, high-performance web applications and seamless user experiences</p>
                        <i className={`${number === 2 ? 'rotate-0 transition-all duration-150' : 'rotate-90'} text-2xl px-3 lg:px-0 hidden md:block`}><ImArrowUpRight2 /></i>
                    </div>

                    <div onMouseLeave={() => handleMouseOut(3)} onMouseEnter={() => handleMouseEnter(3)} className={`${number === 3 ? `bg-gradient-to-r from-[#7544D8] to-[#321962] text-white transition-all duration-500` : 'text-[#7544D8]'} flex flex-col md:flex-row justify-around md:items-center h-32 md:h-28 border-b-2 border-[#DDDDDD] duration-00 transition-all py-2 md:py-0`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center lg:gap-4 '>
                                <h4 className='text-xl font-semibold mx-3 lg:mx-0'>03</h4>
                                <h2 className='text-2xl lg:text-3xl w-[240px] lg:w-[300px] font-semibold'>React Innovations</h2>
                            </div>
                            <i className={`${number === 3 ? 'rotate-0 transition-all duration-150' : 'rotate-90'} text-2xl px-3 lg:px-0 md:hidden`}><ImArrowUpRight2 /></i>
                        </div>
                        <p className={`w-full max-w-[600px] pl-3 pb-2 md:pl-0 md:pb-0 ${number === 3 ? 'text-white transition-all duration-500' : 'text-black'} text-sm lg:text-base`}>Crafting advanced React solutions to build responsive, user-friendly interfaces that drive engagement and performance</p>
                        <i className={`${number === 3 ? 'rotate-0 transition-all duration-150' : 'rotate-90'} text-2xl px-3 lg:px-0 hidden md:block`}><ImArrowUpRight2 /></i>
                    </div>

                    <div onMouseLeave={() => handleMouseOut(4)} onMouseEnter={() => handleMouseEnter(4)} className={`${number === 4 ? `bg-gradient-to-r from-[#7544D8] to-[#321962] text-white transition-all duration-500` : 'text-[#7544D8]'} flex flex-col md:flex-row justify-around md:items-center h-32 md:h-28 border-b-2 border-[#DDDDDD] duration-00 transition-all py-2 md:py-0`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center lg:gap-4 '>
                                <h4 className='text-xl font-semibold mx-3 lg:mx-0'>04</h4>
                                <h2 className='text-2xl lg:text-3xl w-[240px] lg:w-[300px] font-semibold'>MERN Mastery</h2>
                            </div>
                            <i className={`${number === 4 ? 'rotate-0 transition-all duration-150' : 'rotate-90'} text-2xl px-3 lg:px-0 md:hidden`}><ImArrowUpRight2 /></i>
                        </div>
                        <p className={`w-full max-w-[600px] pl-3 pb-2 md:pl-0 md:pb-0 ${number === 4 ? 'text-white transition-all duration-500' : 'text-black'} text-sm lg:text-base`}>Expertise in crafting powerful, full-stack web applications using MongoDB, Express, React, and Node.js for seamless and scalable solutions</p>
                        <i className={`${number === 4 ? 'rotate-0 transition-all duration-150' : 'rotate-90'} text-2xl px-3 lg:px-0 hidden md:block`}><ImArrowUpRight2 /></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect, useState } from 'react';
// import { ImArrowUpRight2 } from 'react-icons/im';

// const Services = () => {
//     const [number, setNumber] = useState(1);

//     const handleMouseEnter = (x) => {
//         setNumber(x);
//     }

//     const handleMouseOut = () => {
//         setNumber(1);
//     }

//     useEffect(() => {
//         Aos.init({ duration: 3000 }); 
//     }, []);

//     return (
//         <div className='bg-[#F6F3FC] px-4 md:px-0 pb-24' id='services'>
//             <div className='container mx-auto'>
//                 <div className='text-center pt-28 lg:pt-36 pb-9 lg:pb-10'>
//                     <h2 className='gradient-text text-3xl md:text-4xl lg:text-5xl font-bold'>My Quality Services</h2>
//                     <p className='w-full max-w-[700px] mx-auto mt-3.5'>Delivering top-notch development with cutting-edge technology, ensuring high performance, reliability, and exceptional user experiences in every project.</p>
//                 </div>
//                 <div>
//                     {[1, 2, 3, 4].map((i) => (
//                         <div 
//                             key={i} 
//                             className={`${number === i ? `bg-gradient-to-r from-[#7544D8] to-[#321962] text-white` : 'text-[#7544D8]'} flex flex-col md:flex-row justify-around md:items-center h-32 md:h-28 border-b-2 border-[#DDDDDD] py-2 md:py-0`} 
//                             onMouseLeave={handleMouseOut} 
//                             onMouseEnter={() => handleMouseEnter(i)}
//                         >
//                             <div className='flex items-center justify-between'>
//                                 <div className='flex items-center lg:gap-4'>
//                                     <h4 className='text-xl font-semibold mx-3 lg:mx-0'>{i < 10 ? `0${i}` : i}</h4>
//                                     <h2 className='text-2xl lg:text-3xl w-[240px] lg:w-[300px] font-semibold'>{['Front-End Fusion', 'JavaScript Jolt', 'React Innovations', 'MERN Mastery'][i - 1]}</h2>
//                                 </div>
//                                 <i className={`${number === i ? 'rotate-0' : 'rotate-90'} text-2xl px-3 lg:px-0 md:hidden`}><ImArrowUpRight2 /></i>
//                             </div>
//                             <p className={`w-full max-w-[600px] pl-3 pb-2 md:pl-0 md:pb-0 ${number === i ? 'text-white' : 'text-black'} text-sm lg:text-base`}>
//                                 {[
//                                     'Crafting seamless, dynamic user interfaces with cutting-edge technologies, ensuring an engaging and intuitive web experience',
//                                     'Empowering your projects with cutting-edge JavaScript solutions for dynamic, high-performance web applications and seamless user experiences',
//                                     'Crafting advanced React solutions to build responsive, user-friendly interfaces that drive engagement and performance',
//                                     'Expertise in crafting powerful, full-stack web applications using MongoDB, Express, React, and Node.js for seamless and scalable solutions'
//                                 ][i - 1]}
//                             </p>
//                             <i className={`${number === i ? 'rotate-0' : 'rotate-90'} text-2xl px-3 lg:px-0 hidden md:block`}><ImArrowUpRight2 /></i>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Services;

