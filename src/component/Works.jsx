// import { GiDrippingStar } from "react-icons/gi";

import { FaArrowRight } from "react-icons/fa";
import { GiDrippingStar } from "react-icons/gi";

const Works = () => {
    return (
        <div className="container mx-auto py-[70px] lg:py-28" id="works">
            <div className='text-center py-10'>
                <h2 className='gradient-text text-3xl md:text-4xl lg:text-5xl font-bold' data-aos="fade-up" data-aos-duration="2000">My Recent Works</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8"  data-aos="fade-up" data-aos-duration="3000">
                {/* project 1 */}

                <div className="border p-6 shadow rounded-tr-3xl rounded-bl-3xl lg:skew-y-6 hover:skew-y-0 transition-transform duration-1000 hover:scale-105">
                    <div className="w-full">
                        <img className="lg:h-[260px]" src="../../public/MuseCorner.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mt-4 mb-1">MuseCorner</h1>
                        <p>This dynamic, user-friendly blog website provides a secure platform for reading, posting, and managing blogs with engaging features.</p>
                        <div className="">
                            <button
                                className="border px-3 py-2.5 mt-3 nav-btn text-white text-sm flex items-center gap-2 hover:scale-x-[1.15] hover:scale-y-105 rounded-lg"
                                onClick={() => document.getElementById('my_modal_1').showModal()}
                            >View Details <i><FaArrowRight /></i></button>
                        </div>
                    </div>

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box max-w-[1580px] p-2 md:p-6">
                            <div className="flex border p-4 md:p-8 shadow relative">

                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute top-0 left-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute top-[38px] -left-[38px] rotate-90"></div>

                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute top-0 right-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute top-[38px] -right-[38px] rotate-90"></div>

                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute bottom-0 left-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute bottom-[38px] -left-[38px] rotate-90"></div>

                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute bottom-0 right-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute bottom-[38px] -right-[38px] rotate-90"></div>

                                <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-0">
                                    <div>
                                        <h4 className="text-2xl font-bold text-[rgb(135,80,247)] mb-1.5">MuseCorner</h4>
                                        <p className="ml-3 mb-3 text-[rgb(20,12,28)] font-light text-sm md:text-base">This project is a dynamic and user-friendly blog website, built using React, Firebase, and JWT for authentication and authorization. It offers a secure and engaging platform for users to read, post, and manage blogs.</p>

                                        <h4 className="text-xl md:text-2xl font-bold mb-1.5 flex items-center gap-1 text-[rgb(20,12,28)]">
                                            <i className="text-[#552F9F] font-bold "><GiDrippingStar /></i>
                                            Top Features :</h4>
                                        <ul className="ml-4 space-y-2">
                                            <li><strong> Navbar:</strong> <span className="text-[rgb(20,12,28)] font-light">Features links to Home, Add Blog, All Blogs, Featured Blogs, and Wishlist. Displays conditional login/register buttons or profile picture with a logout button.</span></li>
                                            <li><strong>Blog Functionality:</strong>
                                                <ul className="ml-8 space-y-1 text-sm list-disc text-[rgb(20,12,28)] font-light">
                                                    <li>Recent blogs with titles, images, descriptions, categories, and wishlist options</li>
                                                    <li>All Blogs page with filtering and search functionality</li>
                                                    <li>Blog Details page with full content, comments, and update options for owners</li>
                                                    <li>Add Blog and Update Blog pages for creating and editing posts</li>
                                                    <li>Featured Blogs page showcasing top 10 posts and Wishlist page for user-saved blogs.</li>
                                                </ul>
                                            </li>
                                            <li><strong>Authentication:</strong> <span className="text-[rgb(20,12,28)] font-light">Supports email/password and social logins (e.g., Google), ensuring secure access with JWT</span></li>
                                        </ul>

                                        <h4 className="text-xl md:text-2xl font-bold mt-3 mb-1.5">Implementation Technologies :</h4>
                                        <ul className="ml-3 space-y-1">
                                            <li className="flex gap-6"><strong className="w-[85px] text-right">Frontend:</strong>
                                                <ul className="flex flex-wrap list-disc space-x-6 text-[rgb(20,12,28)]">
                                                    <li>React</li>
                                                    <li>Firebase</li>
                                                    <li>React-Router-Dom</li>
                                                    <li>Tanstack Query</li>
                                                    <li>Framer Motion</li>
                                                </ul>
                                            </li>
                                            <li className="flex gap-6"><strong className="w-[85px] text-right">Backend:</strong>
                                                <ul className="flex flex-wrap list-disc space-x-6 text-[rgb(20,12,28)]">
                                                    <li>Node.js & Express.js</li>
                                                    <li>JWT (JSON Web Tokens)</li>
                                                </ul>
                                            </li>
                                            <li className="flex gap-6"><strong className="w-[85px] text-right">Database: </strong> <ul className="list-disc text-[rgb(20,12,28)]"><li>MongoDB</li></ul></li>
                                        </ul>
                                        <div className="flex flex-col md:flex-row gap-2 mt-4 ml-4 mb-4 md:ml-0 md:mb-0">
                                            <a href="https://musecorner.netlify.app" className="underline text-[#552F9F] font-bold">Live Site</a>
                                            <span className="hidden md:block">||</span>
                                            <div className="flex flex-col md:flex-row gap-2">
                                                <a href="https://github.com/R0F7/MotionMax-client" className="underline text-[#552F9F] font-bold">client-side-repository</a>
                                                <span className="hidden md:block">||</span>
                                                <a href="https://github.com/R0F7/MuseCorner-server" className="underline text-[#552F9F] font-bold">server-side-repository</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex items-center">
                                        <img src="../../public/MuseCorner.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>

                {/* project 2 */}
                <div className=" border p-6 shadow rounded-2xl kew-y-6 lg:translate-y-8 hover:skew-y-0 lg:hover:rotate-[360deg] transition-transform duration-1000 hover:scale-105">
                    <div className=" w-full">
                        <img className="" src="../../public/motionmax.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mt-4 mb-1">MotionMax</h1>
                        <p>A web-based Employee Management System for a renowned company to monitor workloads, manage salaries, and streamline HR operations.</p>
                        <div className="">
                            <button
                                className="border px-3 py-2.5 mt-3 nav-btn text-white text-sm flex items-center gap-2 hover:scale-x-[1.15] hover:scale-y-105 rounded-lg"
                                onClick={() => document.getElementById('my_modal_2').showModal()}
                            >View Details <i><FaArrowRight /></i></button>
                        </div>
                    </div>

                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box max-w-[1580px] p-2 lg:p-6">
                            <div className="flex border p-4 md:p-8 shadow relative">
                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute top-0 left-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute top-[38px] -left-[38px] rotate-90"></div>
                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute top-0 right-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute top-[38px] -right-[38px] rotate-90"></div>
                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute bottom-0 left-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute bottom-[38px] -left-[38px] rotate-90"></div>
                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute bottom-0 right-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute bottom-[38px] -right-[38px] rotate-90"></div>

                                <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-0">
                                    <div className="lg:w-[70%]">
                                        <h4 className="text-2xl font-bold text-[rgb(135,80,247)] mb-1.5">MotionMax</h4>
                                        <p className="ml-3 mb-3 text-[rgb(20,12,28)] font-light text-sm md:text-base">This Employee Management System is designed for a renowned company to monitor employee workloads, manage salaries, and streamline HR operations. The system features a web application where employees post workflow updates, and HR executives monitor these updates and manage payments.</p>

                                        <h4 className="text-xl md:text-2xl font-bold mb-1.5 flex items-center gap-1 text-[rgb(20,12,28)]">
                                            <i className="text-[#552F9F] font-bold "><GiDrippingStar /></i>
                                            Top Features :</h4>
                                        <ul className="ml-4 space-y-2">
                                            <li><strong>User Authentication:</strong>
                                                <ul className="ml-8 space-y-1 text-sm list-disc text-[rgb(20,12,28)] font-light">
                                                    <li>Email/Password and Social Login: Secure authentication</li>
                                                    <li>Role-Based Access: Employee, HR, and Admin roles</li>
                                                </ul>
                                            </li>
                                            <li><strong>Employee Dashboard:</strong>
                                                <ul className="ml-8 space-y-1 text-sm list-disc text-[rgb(20,12,28)] font-light">
                                                    <li>Work Sheet: Log tasks and hours worked</li>
                                                    <li>Payment History: View monthly salary history</li>
                                                </ul>
                                            </li>
                                            <li><strong>HR Dashboard:</strong>
                                                <ul className="ml-8 space-y-1 text-sm list-disc text-[rgb(20,12,28)] font-light">
                                                    <li>Employee List: Manage employee details and payments</li>
                                                    <li>Progress Monitoring: Filter work records by employee and month</li>
                                                </ul>
                                            </li>
                                            <li><strong>Admin Dashboard:</strong>
                                                <ul className="ml-8 space-y-1 text-sm list-disc text-[rgb(20,12,28)] font-light">
                                                    <li>All Employee List: Manage HR roles and employee status</li>
                                                    <li>Salary Management: Adjust salaries with increase-only restrictions</li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <h4 className="text-xl md:text-2xl font-bold mt-3 mb-1.5">Implementation Technologies :</h4>
                                        <ul className="ml-3 space-y-1">
                                            <li className="flex gap-6"><strong className="w-[85px] text-right">Frontend:</strong>
                                                <ul className="flex flex-wrap list-disc space-x-6 text-[rgb(20,12,28)]">
                                                    <li>React</li>
                                                    <li>Firebase</li>
                                                    <li>Tanstack Query</li>
                                                </ul>
                                            </li>
                                            <li className="flex gap-6"><strong className="w-[85px] text-right">Backend:</strong>
                                                <ul className="flex flex-wrap list-disc space-x-6 text-[rgb(20,12,28)]">
                                                    <li>Node.js & Express.js</li>
                                                    <li>JWT (JSON Web Tokens)</li>
                                                </ul>
                                            </li>
                                            <li className="flex gap-6"><strong className="w-[85px] text-right">Database: </strong> <ul className="list-disc text-[rgb(20,12,28)]"><li>MongoDB</li></ul></li>
                                        </ul>
                                        <div className="flex flex-col md:flex-row gap-2 mt-4 ml-4 mb-4 md:ml-0 md:mb-0">
                                            <a href="https://motionmax-b4ca7.web.app" className="underline text-[#552F9F] font-bold">Live Site</a>
                                            <span className="hidden md:block">||</span>
                                            <div className="flex flex-col md:flex-row gap-2">
                                                <a href="https://github.com/R0F7/MotionMax-client" className="underline text-[#552F9F] font-bold">client-side-repository</a>
                                                <span className="hidden md:block">||</span>
                                                <a href="https://github.com/R0F7/MotionMax-server" className="underline text-[#552F9F] font-bold">server-side-repository</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-[60%] flex items-center">
                                        <img className="w-full h-[85%]" src="../../public/motionmax.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>

                {/* project 3 */}
                <div className=" border p-6 shadow rounded-tl-3xl rounded-br-3xl lg:-skew-y-6 hover:skew-y-0 transition-transform duration-1000 hover:scale-105">
                    <div className=" w-full">
                        <img className="lg:h-[260px]" src="../../public/TravelWish.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold mt-4 mb-1">TravelWise</h1>
                        <p>A Tourism Management Website for Europe, offering an engaging user experience with easy access to information on tourist spots, countries, and travel tips.</p>
                        <div className="">
                            <button
                                className="border px-3 py-2.5 mt-3 nav-btn text-white text-sm flex items-center gap-2 hover:scale-x-[1.15] hover:scale-y-105 rounded-lg"
                                onClick={() => document.getElementById('my_modal_3').showModal()}
                            >View Details <i><FaArrowRight /></i></button>
                        </div>
                    </div>

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box max-w-[1580px] p-2 md:p-6">
                            <div className="flex border p-4 md:p-8 shadow relative">

                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute top-0 left-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute top-[38px] -left-[38px] rotate-90"></div>

                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute top-0 right-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute top-[38px] -right-[38px] rotate-90"></div>

                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute bottom-0 left-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute bottom-[38px] -left-[38px] rotate-90"></div>

                                <div className="w-20 h-1 bg-gradient-to-r from-[#7041CE] to-[#2B1655] absolute bottom-0 right-0"></div>
                                <div className="w-20 h-1 bg-gradient-to-t from-[#7041CE] to-[#2B1655] absolute bottom-[38px] -right-[38px] rotate-90"></div>

                                <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0">
                                    <div className="lg:w-[70%]">
                                        <h4 className="text-2xl font-bold text-[rgb(135,80,247)] mb-1.5">TravelWise</h4>
                                        <p className="ml-3 mb-3 text-[rgb(20,12,28)] font-light text-sm md:text-base">This project focuses on creating a comprehensive tourism website specifically for the continent of Europe. It is designed to offer an engaging and user-friendly experience for tourists looking to explore various European destinations. The website features a clean and intuitive design, making it easy for users to find information about tourist spots, countries, and travel tips.</p>

                                        <h4 className="text-2xl font-bold mb-1.5 flex items-center gap-1 text-[rgb(20,12,28)]">
                                            <i className="text-[#552F9F] font-bold "><GiDrippingStar /></i>
                                            Top Features :</h4>
                                        <ul className="ml-4 space-y-2">
                                            <li><strong> Interactive Tourist Spot Cards:</strong> <span className="text-[rgb(20,12,28)] font-light"> Discover popular tourist spots in Europe with detailed information and the option to add to your wishlist.</span></li>
                                            <li><strong>Country Overview and Details:</strong> <span className="text-[rgb(20,12,28)] font-light"> Explore an overview of European countries with information on tourist spots and access detailed pages for each destination.</span></li>
                                            <li><strong>User Authentication and Management:</strong> <span className="text-[rgb(20,12,28)] font-light"> Secure login and registration with options for social media login, plus features for managing added tourist spots.</span></li>
                                        </ul>

                                        <h4 className="text-xl md:text-2xl font-bold mt-3 mb-1.5">Implementation Technologies :</h4>
                                        <ul className="ml-3 space-y-1">
                                            <li className="flex gap-6"><strong className="w-[85px] text-right">Frontend:</strong>
                                                <ul className="flex flex-wrap list-disc space-x-6 text-[rgb(20,12,28)]">
                                                    <li>React</li>
                                                    <li>Firebase</li>
                                                    <li>Framer Motion</li>
                                                </ul>
                                            </li>
                                            <li className="flex gap-6"><strong className="w-[85px] text-right">Backend:</strong>
                                                <ul className="flex flex-wrap list-disc space-x-6 text-[rgb(20,12,28)]">
                                                    <li>Node.js & Express.js</li>
                                                    <li>JWT (JSON Web Tokens)</li>
                                                </ul>
                                            </li>
                                            <li className="flex gap-6"><strong className="w-[85px] text-right">Database: </strong> <ul className="list-disc text-[rgb(20,12,28)]"><li>MongoDB</li></ul></li>
                                        </ul>
                                        <div className="flex flex-col md:flex-row gap-2 mt-4">
                                            <a href="https://tourism-management-b5a11.web.app" className="underline text-[#552F9F] font-bold">Live Site</a>
                                            <span className="hidden md:block">||</span>
                                            <div className="flex flex-col md:flex-row gap-2">
                                                <a href="https://github.com/R0F7/tourism-management-client" className="underline text-[#552F9F] font-bold">client-side-repository</a>
                                                <span className="hidden md:block">||</span>
                                                <a href="https://github.com/R0F7/tourism-management-server" className="underline text-[#552F9F] font-bold">server-side-repository</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center lg:w-[50%]">
                                        <img className="w-full h-full " src="../../public/TravelWish.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
            </div>

        </div>
    );
};

export default Works;