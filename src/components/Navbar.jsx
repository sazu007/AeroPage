import React from 'react'
import Logo from "../assets/logo.png"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import ScrollspyNav from "react-scrollspy-nav";


const Navbar = () => {
  let [show, setShow] = useState(true)
  let handleShow = () => {
    setShow(!show)
  }
return (
    <section className='py-2 w-full top-0 left-0 lg:bg-slate-300 bg-red-200'>
        <div className="max-w-containe mx-auto">
        <div className="flex justify-evenly items-center">
            <div className="">
            <img src={Logo} alt="logo" />
            </div>
            <div className="flex items-center">
            <ScrollspyNav scrollTargetIds={["banner", "service"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true">  
                <ul className={`lg:flex lg:gap-x-12 absolute left-0 top-0 lg:static ${show ? "top-[105px] w-full lg:bg-transparent bg-red-200 py-6 text-center lg:py-1 transition duration-300 ease-in-out" : "top-[-300px] left-0 w-full bg-[gray] transition duration-300 ease-in-out"} items-center justify-center`}>
                    <li className='py-0 lg:py-0'><a className="justify-center text-[#0B0B0B] font-AbeeZee text-lg font-semibold" href="#banner">Home</a></li>
                    <li className='py-2 lg:py-0'><a className="justify-center text-[#0B0B0B] font-AbeeZee text-lg font-semibold" href="#service">About</a></li>
                    <li className='py-2 lg:py-0'><a className="justify-center text-[#0B0B0B] font-AbeeZee text-lg font-semibold" href="#service">Service</a></li>
                    <li className='py-2 lg:py-0'><a className="justify-center text-[#0B0B0B] font-AbeeZee text-lg font-semibold" href="#banner">Contact</a></li>
                    <div className="flex ml-0 border-2 py-2 px-1 lg:px-6 items-center justify-center rounded-3xl border-red-500 hover:bg-[#EA580C] hover:text-white "> 
                    <p> <FaCloudDownloadAlt className="mr-2 text-2xl"/> </p>
                    <li><a className="font-REM text-base" href="#service">Download</a></li>
                    </div>
                </ul>
                </ScrollspyNav>
            </div>
            <div className="lg:hidden" onClick={handleShow}>
            {show == true ? <RxCross1 /> : <FaBars />}
            </div>
        </div>
        </div>
    </section>
  )
}

export default Navbar