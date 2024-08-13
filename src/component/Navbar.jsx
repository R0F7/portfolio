import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const phoneNumber = '8801612500106';
    const message = 'I am interested in hiring!';
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const handleClick = () => {
        setToggle(!toggle)
    }

    // // Add an event listener to the entire window
    // window.addEventListener('click', function (event) {
    //     if (toggle) {
    //         setToggle(false)
    //         console.log(toggle);
    //     }
    // });
    

    return (
        <div className="fixed w-full z-50 top-0 bg-[#F6F3FC] shadow-[rgba(117,68,216,0.15)] shadow-lg h-[60px] py-10 flex px-4 md:px-0'" >
            <div className="container mx-auto flex justify-between y-6 ">
                <div className="flex gap-6 items-center">
                    {/* logo */}
                    <div className="hidden md:block">
                        <img className="w-16" src="../../public/portfolio_logo 1.png" alt="" />
                    </div>

                    {/* Hamburger menu */}
                    <div className="dropdown-menu relative md:hidden">
                        <button onClick={handleClick} className={`text-3xl border p-3.5 rounded-full ${toggle ? 'bg-[black] bg-opacity-10' : 'bg-transparent '}`}>
                            <i className={` ${!toggle ? 'visible' : 'hidden'}`}><GiHamburgerMenu /></i>
                            <i className={` ${toggle ? 'visible' : 'hidden'}`}><CgClose /></i>
                        </button>
                        <ul
                            className={`${toggle
                                ? 'bg-[#7544D8] g-opacity-90 text-white absolute left- top-[75px] opacity-100 visible scale-y-100 transition-all duration-500 ease-in-out'
                                : 'bg-[#7544D8] g-opacity-90 text-white absolute left- top-[75px] opacity-0 scale-y-0 transition-all duration-500 ease-in-out'
                                } origin-top rounded-tl-none rounded-xl`}
                        >
                            <li><Link to='services' smooth={true} duration={500} spy={true} activeClass="active" className="cursor-pointer">Services</Link></li>
                            <li><Link to='works' smooth={true} duration={500} spy={true} activeClass="active" className="cursor-pointer">Works</Link></li>
                            <li><Link to='resume' smooth={true} duration={500} spy={true} activeClass="active" className="cursor-pointer">Resume</Link></li>
                            <li><Link to='skills' smooth={true} duration={500} spy={true} activeClass="active" className="cursor-pointer">Skills</Link></li>
                            {/* <li>Testimonials</li> */}
                            <li><Link to='contact' smooth={true} duration={500} spy={true} activeClass="active" className="cursor-pointer">Contact</Link></li>
                        </ul>
                    </div>

                    <a href="mailto:wwwrafikhan075@gmail.com" className="text-[#2A1454] font-semibold hover:text-[#5832A5] hidden lg:block">wwwrafikhan075@gmail.com</a>
                </div>

                <div className="flex gap-12 items-center ">
                    <div className="header-menu hidden md:block">
                        <ul className="flex space-x-12 text-[#2A1454] font-semibold">
                            <li><Link to='services' smooth={true} duration={500} spy={true} activeClass="active" className="custom-link">Services</Link></li>
                            <li><Link to='works' smooth={true} duration={500} spy={true} activeClass="active" className="custom-link">Works</Link></li>
                            <li><Link to='resume' smooth={true} duration={500} spy={true} activeClass="active" className="custom-link">Resume</Link></li>
                            <li><Link to='skills' smooth={true} duration={500} spy={true} activeClass="active" className="custom-link">Skills</Link></li>
                            {/* <li>Testimonials</li> */}
                            <li><Link to='contact' smooth={true} duration={500} spy={true} activeClass="active" className="custom-link">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        {/* <button className="text-white nav-btn">Hire me!</button> */}
                        <a
                            className="text-white px-7 py-2.5 rounded-full font-semibold nav-btn"
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Hire me!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// href="https://wa.me/"
// target="_blank"
// rel="noopener noreferrer"
