import react from "../../public/react.png";
import node from "../../public/node-js.png";
import javascript from "../../public/javascript.png";
import express from "../../public/express.png";
import mongoDB from "../../public/mongoDB.png";
import firebase from "../../public/firebase.png";
import jwt from "../../public/jwt.png";
import figma from "../../public/figma.png";
import next from "../../public/next-js.png";
import tailwind from "../../public/tailwind.png";
import 'aos/dist/aos.css';

const Skills = () => {

    return (
        <div className="container mx-auto px-4 md:px-0">
            <div className='text-center py-10 lg:py-14'>
                <h2 className='gradient-text text-3xl md:text-4xl lg:text-5xl font-bold' data-aos="fade-up" data-aos-duration="2000">My Skills</h2>
                <p className='w-full max-w-[700px] mx-auto mt-3.5' data-aos="fade-up" data-aos-duration="2000">Expert in HTML, CSS, JavaScript, React, and the MERN stack, I create dynamic, responsive user interfaces and scalable web solutions, delivering high-quality, modern web applications.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12 md:gap-x-14 md:gap-y-16">
            <div className=" rounded-xl h-[150px] lg:h-[210px]  md:-[200px] shadow" data-aos="zoom-in-up">
                    <div className="skill-box grid justify-center items-center">
                        <img className="h-[70px] t-6 w-[70px] mx-auto skill-image" src={react} alt="" />
                        {/* <h4 className="text-center -mt- font-bold skill-number">80%</h4> */}
                    </div>
                    <h4 className="mt-3 font-bold capitalize text-center text-lg">react</h4>
                </div>
                
                <div className=" rounded-xl h-[150px] lg:h-[210px]  md:-[200px] shadow" data-aos="zoom-in-up">
                    <div className="skill-box grid justify-center items-center">
                        <img className="h-[100px] mt-4 w-[70px] mx-auto skill-image" src={node}  alt="" />
                        {/* <h4 className="text-center -mt-6 font-bold skill-number">90%</h4> */}
                    </div>
                    <h4 className="mt-3 font-bold capitalize text-center text-lg">node</h4>
                </div>
                
                <div className=" rounded-xl h-[150px] lg:h-[210px]  md:-[200px] shadow" data-aos="zoom-in-up">
                    <div className="skill-box grid justify-center items-center">
                        <img className="h-[60px] t-11 w-[60px] mx-auto skill-image" src={javascript} alt="" />
                        {/* <h4 className="text-center mt- font-bold skill-number">90%</h4> */}
                    </div>
                    <h4 className="mt-3 font-bold text-center capitalize text-lg">javascript</h4>
                </div>

                <div className=" rounded-xl h-[150px] lg:h-[210px]  md:-[200px] shadow" data-aos="zoom-in-up">
                    <div className="skill-box grid justify-center items-center">
                        <img className="h-[70px] t-6 w-[120px] mx-auto skill-image" src={express} alt="" />
                        {/* <h4 className="text-center -mt- font-bold skill-number">90%</h4> */}
                    </div>
                    <h4 className="mt-3 font-bold capitalize text-center text-lg">express</h4>
                </div>
                
                <div className=" rounded-xl h-[150px] lg:h-[210px]  md:-[200px] shadow" data-aos="zoom-in-up">
                    <div className="skill-box grid justify-center items-center">
                        <img className="h-[100px] t-5 w-[120px] mx-auto skill-image" src={mongoDB} alt="" />
                        {/* <h4 className="text-center -mt-6 font-bold skill-number">90%</h4> */}
                    </div>
                    <h4 className="mt-3 font-bold text-center text-lg">MongoDB</h4>
                </div>
                
                <div className=" rounded-xl h-[150px] lg:h-[210px]  md:-[200px] shadow" data-aos="zoom-in-up">
                    <div className="skill-box grid justify-center items-center">
                        <img className="h-[60px] t-11 w-[60px] mx-auto skill-image" src={firebase} alt="" />
                        {/* <h4 className="text-center mt- font-bold skill-number">90%</h4> */}
                    </div>
                    <h4 className="mt-3 font-bold text-center capitalize text-lg">firebase</h4>
                </div>

                <span className='hidden lg:block'></span>
                
                <div className=" rounded-xl h-[150px] lg:h-[210px]  md:-[200px] shadow" data-aos="zoom-in-up">
                    <div className="skill-box grid justify-center items-center">
                        <img className="h-[80px] t-8 w-[90px] mx-auto skill-image" src={jwt} alt="" />
                        {/* <h4 className="text-center -mt-4 font-bold skill-number">90%</h4> */}
                    </div>
                    <h4 className="mt-3 font-bold text-center capitalize text-lg">JWT</h4>
                </div>
                
                <div className=" rounded-xl h-[150px] lg:h-[210px]  md:-[200px] shadow" data-aos="zoom-in-up">
                    <div className="skill-box grid justify-center items-center">
                        <img className="h-[150px] w-[160px] mx-auto skill-image" src={figma} alt="" />
                        {/* <h4 className="text-center -mt-11 font-bold skill-number">90%</h4> */}
                    </div>
                    <h4 className="mt-3 font-bold capitalize text-center text-lg">figma</h4>
                </div>

                <div className=" rounded-xl h-[150px] lg:h-[210px]  md:-[200px] shadow" data-aos="zoom-in-up">
                    <div className="skill-box grid justify-center items-center">
                        <img className="h-[70px] t-6 w-[90px] mx-auto skill-image" src={next}  alt="" />
                        {/* <h4 className="text-center -mt-6 font-bold skill-number">90%</h4> */}
                    </div>
                    <h4 className="mt-3 font-bold capitalize text-center text-lg">next</h4>
                </div>


                <div className=" rounded-xl h-[150px] lg:h-[210px]  md:-[200px] shadow" data-aos="zoom-in-up">
                    <div className="skill-box grid justify-center items-center">
                        <img className="h-[80px] t-8 w-[90px] mx-auto skill-image" src={tailwind} alt="" />
                        {/* <h4 className="text-center -mt-4 font-bold skill-number">90%</h4> */}
                    </div>
                    <h4 className="mt-3 font-bold text-center capitalize text-lg">tailwind</h4>
                </div>
            </div>
        </div>
    );
};

export default Skills;