import React, { useContext, useState, useRef, useEffect } from 'react'
import { ModalContext } from '../Context/ModalContext';
import { FaGithub } from "react-icons/fa";
import { project_data } from '../assets/projectDescription';
const Modal = (props) => {
    const { toggle, setToggle } = useContext(ModalContext);
    return (
        <>
            {toggle ? <div className='bg-black/80 w-full fixed h-screen z-10 top-0 left-0'></div> : ''}
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`${toggle ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative p-4 w-full max-w-xl max-h-lg">
                    <div className="relative bg-white border rounded-lg shadow dark:bg-[#14131a]">
                        <div className="flex items-center justify-between px-4 py-2 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {project_data[props.id].title}
                            </h3>
                            <button onClick={() => setToggle(!toggle)} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="px-4 py-2">
                            <div className='flex items-center gap-2 mb-2 '>
                                <button className='bg-[#50366c] p-1 text-white rounded-md'> {project_data[props.id].duration}</button>
                                <a href={project_data[props.id].github} target='_blank' rel="noopener noreferrer"><FaGithub size={30} className='text-white hover:scale-105 duration-200' /></a>
                            </div>
                            <div className='flex gap-2 flex-wrap '>
                                {project_data[props.id].technology.map((tech, i) => <button key={i} className='bg-[#62606c] text-white text-sm p-1 rounded-md'>{tech}</button>)}
                            </div>
                            <div className='mx-4'>
                                <ul className='text-white'>
                                    {project_data[props.id].description.map((item, i) => <li key={i} className='list-disc'>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal