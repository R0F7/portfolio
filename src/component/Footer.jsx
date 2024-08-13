import { Link } from 'react-scroll';
import logo from "../../public/protfolio logo .jpg";

const Footer = () => {
    return (
        <div className='flex justify-center items-center py-16 bg-[#2A1454] text-white'>
            <div className='space-y-6'>
                <img className='h-14 w-14 mx-auto rounded-full' src={logo} alt="" />
                <ul className='flex gap-3 md:gap-6 '>
                    <Link className='text-sm md:text-base font-semibold md:font-bold' to='services' smooth={true} duration={500} spy={true}>Services.</Link>
                    <Link className='text-sm md:text-base font-semibold md:font-bold' to='works' smooth={true} duration={500} spy={true}>Works.</Link>
                    <Link className='text-sm md:text-base font-semibold md:font-bold' to='skills' smooth={true} duration={500} spy={true}>Skills.</Link>
                    <Link className='text-sm md:text-base font-semibold md:font-bold' to='resume' smooth={true} duration={500} spy={true}>Resume.</Link>
                    <Link className='text-sm md:text-base font-semibold md:font-bold' to='contact' smooth={true} duration={500} spy={true}>Contact.</Link>
                    <Link className='text-sm md:text-base font-semibold md:font-bold' to='' smooth={true} duration={500} spy={true}>Blog.</Link>
                </ul>
                <h6 className='flex gap-1 justify-center'>&copy; <span>{new Date().getFullYear()}</span><p>All Rights Reserved by R0F7</p></h6>
            </div>
        </div>
    );
};

export default Footer;