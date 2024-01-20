import React from 'react'
import { IoMdBaseball } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";

const Deployment = () => {
  return (
 
    <section id="service" className='mt-16'>
        <div className="max-w-container mx-auto">
            <div className="lg:flex justify-between items-center rounded-sm gap-16 w-[90%] lg:w-full ">
                <div className="flex items-center justify-center h-135 w-357 bg-red-100 rounded-2xl  hover:bg-rose-300 mt-5 mb-2">
               <div className="mr-10 border-2 py-4 px-6 border-l-transparent border-t-transparent border-b-transparent border-red-200">  <IoMdBaseball className='text-4xl'/></div>
                <div> <h3 className="font-Roboto font-bold text-xl text-[#09090B] py-4">Immediate Deployment</h3>
                <p className="font-Roboto text-base text-[#71717A] pb-4">Et vero eos et accusamus et 
iusto odio dignissimos</p>
</div>
                </div>
                <div className="flex items-center justify-center h-135 w-357 bg-red-100 rounded-2xl  hover:bg-rose-300 mt-5 mb-2">
               <div className="mr-10 border-2 py-4 px-6 border-l-transparent border-t-transparent border-b-transparent border-red-200 rounded-lg">  <IoMdBaseball className='text-4xl'/></div>
                <div> <h3 className="font-Roboto font-bold text-xl text-[#09090B] py-4">Immediate Deployment</h3>
                <p className="font-Roboto text-base text-[#71717A] pb-4">Et vero eos et accusamus et 
iusto odio dignissimos</p>
</div>
                </div>
                <div className="flex items-center justify-center h-135 w-357 bg-red-100 rounded-2xl  hover:bg-rose-300 mt-5 mb-2">
               <div className="mr-10 border-2 py-4 px-6 border-l-transparent border-t-transparent border-b-transparent border-red-200">  <IoMdBaseball className='text-4xl'/></div>
                <div> <h3 className="font-Roboto font-bold text-xl text-[#09090B] py-4">Immediate Deployment</h3>
                <p className="font-Roboto text-base text-[#71717A] pb-4">Et vero eos et accusamus et 
iusto odio dignissimos</p>
</div>
      </div>
 </div>
        </div>
        <ScrollToTop smooth />
    </section>
  )
}

export default Deployment