import { FaGraduationCap } from 'react-icons/fa';
import { SiCompilerexplorer } from 'react-icons/si';
import 'aos/dist/aos.css'; 

const Resume = () => {

    return (
        <div className='container mx-auto flex flex-col md:flex-row gap-10 py-28'>
            {/* Experience */}
            <div className='md:w-1/2'>
                <h4 className='flex items-center justify-center gap-4 text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-14'  data-aos="fade-up" data-aos-duration="2000"> <i className='text-[#7746DA]'><SiCompilerexplorer /></i>My Experience</h4>
                <div className='bg-white h-[130px] rounded-lg' data-aos="fade-up" data-aos-duration="2000">
                </div>
            </div>

            {/* Education */}
            <div className='md:w-1/2'>
                <h4 className='flex items-center justify-center gap-4 text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-14'  data-aos="fade-up" data-aos-duration="2000"><i className='text-[#7746DA]'><FaGraduationCap /></i> My Education</h4>
                <div className='space-y-6'>
                    <div className={`bg-white p-6 rounded-xl resume-container`}  data-aos="fade-up" data-aos-duration="2000">
                        <h6 className={` font-bold text-lg text-[#7746DA] resume-date`}>2021 - 2026</h6>
                        <h4 className='font-bold text-xl my-0.5'>Bachelor of Science</h4>
                        <h6 className=''>Govt. Shah Sultan College</h6>
                    </div>
                    <div className={`bg-white p-6 rounded-xl resume-container`}  data-aos="fade-up" data-aos-duration="2000">
                        <h6 className={`font-bold text-lg text-[#7746DA] resume-date`}>2023 - 2024</h6>
                        <h4 className='font-bold text-xl my-0.5'>Complete Web Development Course With Jhankar Mahbub</h4>
                        <h6 className=''>Programming Hero</h6>
                    </div>
                    <div className={`bg-white p-6 rounded-xl resume-container`}  data-aos="fade-up" data-aos-duration="2000">
                        <h6 className={` font-bold text-lg text-[#7746DA] resume-date`}>2018 - 2019</h6>
                        <h4 className='font-bold text-xl my-0.5'>Higher Secondary Certificate</h4>
                        <h6 className=''>Gossainbari Degree College</h6>
                    </div>
                        {/* <h6 className={` font-bold text-lg ${number === 4 ? 'text-white transition-colors duration-500' : 'text-[#7746DA]'} `}>2016 - 2017</h6> */}
                    <div className={`bg-white p-6 rounded-xl resume-container`}  data-aos="fade-up" data-aos-duration="2000">
                        <h6 className={` font-bold text-lg text-[#7746DA] resume-date`}>2016 - 2017</h6>
                        <h4 className='font-bold text-xl my-0.5'>Secondary School Certificate</h4>
                        <h6 className=''>Gossainbari A A High School</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;