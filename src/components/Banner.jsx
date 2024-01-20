import React from 'react'
import { FaRegBell } from "react-icons/fa";
import Banimg from "../assets/banner.png"
const banner = () => {
  return (
    <section id="banner" className='mt-16'>
        <div className="max-w-container mx-auto">
            <div className="lg:flex justify-between lg:py-10">
                <div className="w-full lg:w-1/2 items-center">
                    <button className='flex border-2 border-stone-950 px-4 rounded-full items-center mb-6 hover:bg-rose-300'><FaRegBell className='mr-5 -ml-4 text-5xl text-black mt-1 border-2 py-2 px-2 bg-red-200 rounded-full'/><a className="font-ABeeZee font-semibold text-black" href="#"> Startup Business</a></button>
                    <h1 className='font-Roboto lg:text-5xl text-4xl text-[#09090B] w-[90%] lg:ml-0 ml-1  lg:w-full mb-5 font-semibold'>Empowering startups to fuel their business growth</h1>
<p className='font-Roboto text-wrap text-lg text-[#09090B] text-justify w-[90%] lg:w-[550px] mb-5 lg:ml-0 font-semibolt'>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
 velit <br/>
nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                <button className='border-2 py-2 px-8 rounded-lg border-red-500 hover:bg-[#EA580C] '><a className='font-Roboto font-semibold text-black hover:text-white hover:transition-colors' href="#service">Get started now</a></button>
                </div>
            <div className="w-[90%] text-center lg:w-full lg:ml-32 justify-center">
              <img src={Banimg} alt="banner" />
            </div>
            </div>

        </div>
    </section>
  )
}

export default banner