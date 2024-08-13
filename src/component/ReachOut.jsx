import { useEffect, useRef } from 'react';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { LuPhoneCall } from 'react-icons/lu';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_service, import.meta.env.VITE_template, form.current, {
                publicKey: import.meta.env.VITE_publicKey,
            })
            .then(
                () => {
                    toast.success('Email send successfully')
                },
                (error) => {
                    toast.error('FAILED...', error.text)
                },
            );
        e.target.reset()
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='container mx-auto flex flex-col-reverse md:flex-row lg:gap-24 px-4 md:px-0'>
            {/* <Helmet>
                <title>Rakibul's Web Wonders | Contact</title>
            </Helmet> */}
            {/* form */}
            <div className='md:w-1/2 bg-white rounded-xl p-6 lg:p-10' data-aos="fade-up" >
                <h4 className='text-2xl md:text-3xl lg:text-5xl gradient-text font-bold mb-2' data-aos="fade-up" data-aos-duration="2000">Let’s work together!</h4>
                <p className='w-full max-w-[520px] font-light text-sm lg:text-base' data-aos="fade-up" data-aos-duration="2000">Contact me to discuss your project and how we can create exceptional web solutions together. Fill out the form below to get started!</p>

                <form onSubmit={sendEmail} ref={form} className='grid grid-cols-2 gap-x-4 gap-y-4 lg:gap-y-6 mt-6'>
                    <input type="text" name='name' className='border bg-[#F6F3FC] p-3 rounded-md col-span-2' placeholder='Full name' required data-aos="fade-up" data-aos-duration="2000" />
                    <input type="email" name='email' className='border bg-[#F6F3FC] p-3 rounded-md col-span-2 lg:col-span-1' placeholder='Email address' required data-aos="fade-up" data-aos-duration="2000" />
                    <input type="text" name='phone' className='border bg-[#F6F3FC] p-3 rounded-md col-span-2 lg:col-span-1' placeholder='Phone number' required data-aos="fade-up" data-aos-duration="2000" />
                    <input type="text" name='subject' className='border bg-[#F6F3FC] p-3 rounded-md col-span-2' placeholder='Subject' required data-aos="fade-up" data-aos-duration="2000" />
                    <textarea name="message" className='border bg-[#F6F3FC] p-3 rounded-md col-span-2' rows='6' id="" placeholder='Message' required data-aos="fade-up" data-aos-duration="2000"></textarea>
                    <button type='submit' className='border py-3 rounded-full text-white bg-gradient-to-r from-[#7544D8] to-[#321962]' data-aos="fade-up" data-aos-duration="2000">Send Message</button>
                </form>

            </div>
            {/* info */}
            <div className='md:w-1/2 flex items-center md:justify-end lg:justify-normal' >
                <div data-aos="fade-up">
                    <div className='space-y-8 lg:space-y-14 pb-10 md:pb-0' >
                        <div className='flex gap-4' data-aos="fade-up" data-aos-duration="2000">
                            <i className='w-[50px] h-[50px] rounded-full flex items-center justify-center border bg-gradient-to-t from-[#7544D8] to-[#321962] text-white text-xl'><LuPhoneCall /></i>
                            <div>
                                <h6>Phone</h6>
                                <h4 className='text-lg lg:text-xl font-medium mt-1'>+8801612500106</h4>
                            </div>
                        </div>

                        <div className='flex gap-4' data-aos="fade-up" data-aos-duration="2000"> 
                            <i className='w-[50px] h-[50px] rounded-full flex items-center justify-center border bg-gradient-to-t from-[#7544D8] to-[#321962] text-white text-lg lg:text-xl'><HiOutlineMail /></i>
                            <div>
                                <h6>Email</h6>
                                <h4 className='text-lg lg:text-xl font-medium mt-1'>wwwrafikhan075@gmail.com</h4>
                            </div>
                        </div>

                        <div className='flex gap-4' data-aos="fade-up" data-aos-duration="2000">
                            <i className='w-[50px] h-[50px] rounded-full flex items-center justify-center border bg-gradient-to-t from-[#7544D8] to-[#321962] text-white text-lg lg:text-xl'><GrLocation /></i>
                            <div>
                                <h6>Address</h6>
                                <h4 className='text-lg lg:text-xl font-medium mt-1'>Gossignbari, <br /> Bogura, Bangladesh</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;