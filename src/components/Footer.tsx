
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { LuCopyright } from "react-icons/lu";

function Footer() {
  return (
    <div className='bg-[#fef6e5]  md:p-[40px] '>
        <div className='  md:flex justify-between items-center border-b border-gray-200 p-[20px]'>
          <div className='md:mb-5 '>
            <h1 className='font-extrabold text-2xl font-serif mb-2'>Hayalo</h1>
            <p className='font-serif sm:font-bold sm:text-sm md:w-[250px]'>The event supplies rental and Marketplace </p>
          </div>
           <div className='md:flex gap-[130px] justify-around'>

            <div>
              <h1 className='mt-4 font-extrabold text-md font-serif mb-2'>What we do</h1>
              <ul className='text-sm font-serif'>
                <li>Shop hayalo</li>
                <li>About</li>
                <li>Hayalo for Vendors</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div>
              <h1 className=' mt-4 font-extrabold text-md font-serif mb-2'>Support</h1>
              <ul className='text-sm font-serif cursor-pointer'>
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Blogs</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='md:mb-[80px] mt-4'>
              <div className='flex gap-4'>
                <div className=' cursor-pointer w-8 h-8 rounded-full bg-[#fce3b1] flex items-center justify-center'>
                <FaXTwitter />
                </div>
                <div className=' cursor-pointer w-8 h-8 rounded-full bg-[#fce3b1] flex items-center justify-center '>
                <FaFacebook />
                </div>
                <div className='cursor-pointer w-8 h-8 rounded-full bg-[#fce3b1] flex items-center justify-center'>
                <RiInstagramFill />
                </div>
              </div>
           </div>

            </div>
        </div>
        <div className=' ml-4 flex justify-between items-center py-6 flex-wrap gap-3'>
          <ul className='text-sm font-serif flex gap-4 cursor-pointer'>
            <li>Cookies</li>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
          </ul>

          <div className='flex items-center sm:mt-3'>
          <LuCopyright /><span className='font-serif text-sm'>2025 Hayalo - All rights reserved.</span>
          </div>

        </div>
        
        
       </div>
  )
}

export default Footer