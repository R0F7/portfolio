import { FaDiscord, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
import { useEffect } from "react";

const Banner = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animations in milliseconds
        });
    }, []);

    return (
        <div className="container mx-auto pt-32 pb-14 lg:pt-44 lg:pb-24" id="home">
            <div className="flex" >
                {/* text */}
                <div className="lg:w-1/2 flex items-center" data-aos="fade-right">
                    <div >
                        <h4 className="text-3xl lg:text-4xl font-semibold mb-2.5 text-[rgb(42,20,84)]">I am Rakibul</h4>
                        <h2 className="text-4xl lg:text-6xl font-semibold mb-4 ext-sky-600 gradient-text">
                            <Typewriter
                                words={[
                                    "Front-end developer",
                                    "JavaScript developer",
                                    "React Developer",
                                    "MERN Stack Developer"
                                ]}
                                loop={true}
                                cursor={true}
                                cursorStyle="|"
                                cursorColor="red"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                className="relative "
                            />
                            <span className="">_</span>
                        </h2>

                        {/* mobile image */}
                        <div className="flex justify-center lg:justify-center my-10 md:hidden" data-aos="zoom-in">
                            <img className="w-[250px] h-[280px] rounded-2xl rotate-[4.29deg] hover:rotate-0 transition-transform duration-500 hover:border-2 hover:shadow-md border-[rgb(135,80,247)]" src="../../public/me.jpg" alt="" />
                        </div>

                        <p className="wf lg:max-w-[550px] w-full lg:text-xl text-[rgb(20,12,28)] ext-[#1C102B] font-light">I am a skilled developer in JavaScript, React, Express, Node.js, and MongoDB, aiming to become a proficient full-stack developer.</p>
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-6 lg:mt-10">
                            <div className="flex ">
                                <a
                                    href="https://drive.google.com/uc?export=download&id=1BGt2p4wh9u_UUtahiz54t9PwjRCiicBi"
                                    download='Frontend_Developer_Resume_of_MD_Rakibul.pdf'
                                    className="flex items-center px-8 py-3 rounded-full font-medium border text-[rgb(135,80,247)] border-[rgb(135,80,247)] hover:bg-[rgb(135,80,247)] hover:text-white duration-500"
                                >Download Resume <span className="text-xl ml-1"><MdOutlineFileDownload /></span></a>
                            </div>
                            {/* <span ><FaFacebookF className="w-10 h-10 border text-[rgb(135,80,247)] border-[rgb(135,80,247)] p-2.5 rounded-full hover:bg-[rgb(135,80,247)] hover:text-white origin- duration-1000 ease-in" /></span> */}
                            <div className="space-x-4 mt-3.5 md:mt-0">
                                <a href="https://web.facebook.com/?_rdc=1&_rdr" className="social-btn"><FaFacebookF /></a>
                                <a href="https://www.linkedin.com/in/md-rakibul-075r" className="social-btn"><FaLinkedinIn /></a>
                                <a href="https://github.com/R0F7" className="social-btn"><FaGithub /></a>
                                <a href="https://discord.com/channels/1247605305525670042/1247605306008141866" className="social-btn"><FaDiscord /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* image */}
                <div className="w-1/2 hidden md:flex justify-end lg:justify-center" data-aos="zoom-in">
                    <img className="w-[300px] lg:w-[470px] lg:h-[506px] rounded-2xl rotate-[4.29deg] hover:rotate-0 transition-transform duration-500 hover:border-2 hover:shadow-md border-[rgb(135,80,247)]" src="../../public/me.jpg" alt="" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-y-5 lg:gap-x-0 lg:grid-cols-4 mt-10 md:mt-20 md:w-[550px] lg:w-full mx-auto ml-10 md:ml-0 " data-aos="fade-up" data-aos-duration="2000">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <h4 className="text-5xl md:text-6xl font-bold text-[#8750F7]">1</h4>
                    <h4 className="text-[#8750F7] font-medium">Years of <br /> Experience</h4>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <h4 className="text-5xl md:text-6xl font-bold text-[#8750F7]">7+</h4>
                    <h4 className="text-[#8750F7] font-medium">Projects <br /> Completed</h4>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <h4 className="text-5xl md:text-6xl font-bold text-[#8750F7]">4</h4>
                    <h4 className="text-[#8750F7] font-medium">Technologies <br /> Mastered</h4>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <h4 className="text-5xl md:text-6xl font-bold text-[#8750F7]">420+</h4>
                    <h4 className="text-[#8750F7] font-medium">Code <br /> Commits</h4>
                </div>
            </div>
        </div>
    );
};

export default Banner;