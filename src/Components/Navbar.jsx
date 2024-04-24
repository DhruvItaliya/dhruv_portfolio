import React, { useState } from 'react';
import { GoHome } from "react-icons/go";
import { TbCircleFilled } from "react-icons/tb";
import { RiFireLine } from "react-icons/ri";
import { PiBracketsAngleBold } from "react-icons/pi";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <>
            <nav className=" sticky flex w-full justify-end shadow-md bg-[#14131a] top-0 z-10 p-5">
                <div className="flex items-center gap-5">
                    <button className='text-white bg-[#20e952] p-2 rounded-xl'>Contact Me <i className="fa-regular fa-user ml-1"></i></button>
                    <div onClick={() => setNav(!nav)}>
                        <AiOutlineMenu size={30} className='lg:hidden text-gray-400' />
                    </div>
                </div>
            </nav>
            {/* side menu */}
            <div className={nav ? 'flex flex-col fixed top-0 left-0 w-full sm:w-[300px] lg:flex lg:flex-col z-10 bg-[#14131a] h-screen duration-300' : 'fixed top-0 left-[-100%] w-full z-10 h-screen duration-300'}>
                <div className="flex justify-between items-center pt-5 px-4">
                    <div className='flex'>
                        <TbCircleFilled size={22} className='mx-0.5 text-[#20e952]' />
                        <TbCircleFilled size={22} className='mx-0.5 text-[#20e952]' />
                    </div>
                    <AiOutlineClose className='text-white lg:hidden' size={25} onClick={() => setNav(!nav)} />
                </div>
                <div className='m-5 h-screen'>
                    <nav>
                        <ul className='flex flex-col p-4 text-white'>
                            <li className='flex cursor-pointer text-lg py-4 pl-4 active:text-orange-400'  >
                                <GoHome size={25} className='mr-3' />
                                Home
                            </li>
                            <li className='flex cursor-pointer text-lg py-4 pl-4 active:text-orange-400'>
                                <RiFireLine size={25} className='mr-3' />
                                Trending
                            </li>
                            <li className='flex cursor-pointer text-lg py-4 pl-4 active:text-orange-400'>
                                <PiBracketsAngleBold size={25} className='mr-3' />
                                Snippet
                            </li>
                            <p className='flex cursor-pointer text-lg mr-1 py-4'>Social</p>
                            <li className='flex cursor-pointer text-lg py-4 pl-4 active:text-orange-400'>
                                <a href="https://www.linkedin.com/in/dhruv-italiya-01b177221/" className='flex' target="_blank" rel="noopener noreferrer">
                                    <FiLinkedin size={25} className='mr-3 text-blue-500' />
                                    LinkedIn
                                </a>
                            </li>
                            <li className='flex cursor-pointer text-lg py-4 pl-4 active:text-orange-400'>
                                <a href="https://github.com/DhruvItaliya" className='flex' target="_blank" rel="noopener noreferrer">
                                    <FiGithub size={25} className='mr-3 text-white' />
                                    Github
                                </a>
                            </li>
                            <li className='flex cursor-pointer text-lg py-4 pl-4 active:text-orange-400'>
                                <a href="https://leetcode.com/italiyadhruv09/" className='flex' target="_blank" rel="noopener noreferrer">
                                    <SiLeetcode size={25} className='mr-3 text-orange-500' />
                                    Leetcode
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className={'hidden fixed top-0 left-0 w-full sm:w-[300px] lg:flex lg:flex-col z-10 h-screen duration-300'}>
                <div className="flex justify-between items-center pt-5 px-4">
                    <div className='flex'>
                        <TbCircleFilled size={22} className='mx-0.5 text-[#20e952]' />
                        <TbCircleFilled size={22} className='mx-0.5 text-[#20e952]' />
                    </div>
                    <AiOutlineClose className='text-white lg:hidden' size={25} onClick={() => setNav(!nav)} />
                </div>
                <div className='m-5 h-screen bg-[#1c1b23] rounded-xl'>
                    <nav>
                        <ul className='flex flex-col p-4 text-white'>
                            <li className='flex cursor-pointer text-md py-4 pl-4 active:text-orange-400'  >
                                <GoHome size={25} className='mr-3' />
                                Home
                            </li>
                            <li className='flex cursor-pointer text-md py-4 pl-4 active:text-orange-400'>
                                <RiFireLine size={25} className='mr-3' />
                                Trending
                            </li>
                            <li className='flex cursor-pointer text-md py-4 pl-4 active:text-orange-400'>
                                <PiBracketsAngleBold size={25} className='mr-3' />
                                Snippet
                            </li>
                            <p className='flex cursor-pointer text-lg mr-1 py-4'>Social</p>
                            <li className='flex cursor-pointer text-md py-4 pl-4 active:text-orange-400'>
                                <a href="https://www.linkedin.com/in/dhruv-italiya-01b177221/" className='flex' target="_blank" rel="noopener noreferrer">
                                    <FiLinkedin size={25} className='mr-3 text-blue-500' />
                                    LinkedIn
                                </a>
                            </li>
                            <li className='flex cursor-pointer text-md py-4 pl-4 active:text-orange-400'>
                                <a href="https://github.com/DhruvItaliya" className='flex' target="_blank" rel="noopener noreferrer">
                                    <FiGithub size={25} className='mr-3 text-white' />
                                    Github
                                </a>
                            </li>
                            <li className='flex cursor-pointer text-md py-4 pl-4 active:text-orange-400'>
                                <a href="https://leetcode.com/italiyadhruv09/" className='flex' target="_blank" rel="noopener noreferrer">
                                    <SiLeetcode size={25} className='mr-3 text-orange-500' />
                                    LeetCode
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>


    )
}

export default Navbar