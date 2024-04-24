import React from 'react';
import profileImage from '../assets/images/profile5.jpeg';

const Profile = () => {
    return (
        <div className="flex w-full my-2 bg-sky-500 bg-gradient-to-r from-purple-500 to-pink-500 bg-no-repeat bg-cover">
            <div className='flex justify-around md:rounded-ld overflow-hidden md:px-10 py-5 backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10'>
                <div className='flex justify-center items-center gap-2'>
                    <img alt="Dhruv Italiya" loading="lazy" width="120" height="120" decoding="async" data-nimg="1" className="object-cover border-4 border-white rounded-full shadow-md" style={{ color: "transparent" }} src={profileImage} />
                    <div className=''>
                        <div className='text-3xl font-bold tracking-wide text-white'>
                            Dhruv Italiya
                        </div>
                        <div>
                            <p>MERN Stack Developer</p>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex justify-center items-center w-[50%]'>
                    <p className='text-justify text-white'>"Passionate MERN stack developer dedicated to pushing boundaries and embracing innovation. Committed to continuous learning, I thrive on exploring new technologies to create cutting-edge web solutions."</p>
                </div>
            </div>
        </div>
    )
}

export default Profile