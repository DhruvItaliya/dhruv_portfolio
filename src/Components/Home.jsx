import React, { useContext, useState } from 'react';
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import Modal from './Modal';
import { project_data } from '../assets/projectDescription';
import { ModalContext } from '../Context/ModalContext';
const Home = () => {
    const { toggle, setToggle } = useContext(ModalContext);
    const [projectId, setProjectId] = useState(0);
    return (
        <>
            <div className='px-10'>
                <div className='py-5'>
                    <Modal id={projectId} />
                    <h1 className='text-2xl text-white pb-4'>Projects</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {project_data.map((project) => {
                            return (
                                <div key={project.id} onClick={() => { setToggle(!toggle); setProjectId(project.id) }} className='w-full flex flex-col items-center hover:scale-105 rounded-lg duration-500'>
                                    <div className=' w-full h-[150px] sm:h-[144px] overflow-hidden rounded-t-lg bg-white'>
                                        <img src={project.thumbnail}
                                            className='w-full h-full object-contain' alt="gov" />
                                    </div>
                                    <hr />
                                    <div className='flex flex-col justify-center w-full px-3 h-24 text-sm bg-gray-200 rounded-b-lg'>
                                        <h1 className='font-bold text-[17px]'>{project.title}</h1>
                                        <p>{project.technology.join(', ')}</p>                                        
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* What i know */}
                <div className='py-5'>
                    <h1 className='text-2xl text-white pb-4'>What I know</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='w-full flex flex-col items-center rounded-lg bg-[#1b1c23]'>
                            <div className='flex justify-start items-center w-full p-2 rounded-t-lg'>
                                <div className='text-gray-400 text-2xl p-2'>Frontend</div>
                            </div>
                            <div className='flex w-full p-2 h-auto text-sm bg-[#1b1c23] rounded-b-lg gap-2 flex-wrap'>
                                <div className='bg-[#14131a] p-1 rounded-md text-gray-300 border border-green-300'>HTML</div>
                                <div className='bg-[#14131a] p-1 rounded-md text-gray-300 border border-orange-300'>CSS</div>
                                <div className='bg-[#14131a] p-1 rounded-md text-gray-300 border border-yellow-300'>Tailwind</div>
                                <div className='bg-[#14131a] p-1 rounded-md text-gray-300 border border-red-300'>Javascript</div>
                                <div className='bg-[#14131a] p-1 rounded-md text-gray-300 border border-blue-300'>ReactJs</div>
                                <div className='bg-[#14131a] p-1 rounded-md text-gray-300 border border-pink-300'>Bootstrap</div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-center rounded-lg bg-[#1b1c23]'>
                            <div className='flex justify-start items-center w-full p-2 rounded-t-lg'>
                                <div className='text-gray-400 text-2xl p-2'>Backend</div>
                            </div>
                            <div className='flex w-full p-2 h-auto text-sm bg-[#1b1c23] rounded-b-lg gap-2 flex-wrap'>
                                <div className='bg-[#14131a] p-1 rounded-md text-gray-300 border border-orange-300'>NodeJs</div>
                                <div className='bg-[#14131a] p-1 rounded-md text-gray-300 border border-blue-300'>ExpressJs</div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-center rounded-lg bg-[#1b1c23]'>
                            <div className='flex justify-start items-center w-full p-2 rounded-t-lg'>
                                <div className='text-gray-400 text-2xl p-2'>Database</div>
                            </div>
                            <div className='flex w-full p-2 h-auto text-sm bg-[#1b1c23] rounded-b-lg gap-2 flex-wrap'>
                                <div className='bg-[#14131a] p-1 rounded-md text-gray-300 border border-red-300'>MySQL</div>
                                <div className='bg-[#14131a] p-1 rounded-md text-gray-300 border border-green-300'>MongoDB</div>
                                <div className='bg-[#14131a] p-1 rounded-md text-gray-300 border border-blue-300'>PostgreSQL</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='h-[0.5px] bg-gray-700 w-full outline-none border-none ' />
                <div className='flex flex-col md:flex-row items-center justify-around gap-2 py-4'>
                    <div className='flex flex-col items-center gap-1'>
                        <h1 className='text-2xl text-gray-300'>FIND ME ON</h1>
                        <div className='flex gap-5'>
                            <a href="https://www.linkedin.com/in/dhruv-italiya-01b177221/" target='_blank' rel="noreferrer"><FiLinkedin className='text-blue-500' size={20} /></a>
                            <a href="https://github.com/DhruvItaliya" target='_blank' rel="noreferrer"><FiGithub className='text-white' size={20} /></a>
                            <a href="https://t.me/dhruv5234" target='_blank' rel="noreferrer"><FaTelegramPlane className='text-[#24A1DE]' size={20} /></a>
                            <a href="https://www.instagram.com/i_dhruv_888/" target='_blank' rel="noreferrer"><IoLogoInstagram className='text-[#E1306C]' size={20} /></a>
                        </div>
                        <p className='text-[12px] text-gray-300'>Feel Free to <span className='text-green-300'>Connect</span> with me</p>
                    </div>
                    <p className='text-gray-500'>Copyright &copy;{new Date(Date.now()).getFullYear()} dhruv@dev</p>
                </div>
                <div className='text-white'>
                </div>
            </div>
        </>
    )
}

export default Home