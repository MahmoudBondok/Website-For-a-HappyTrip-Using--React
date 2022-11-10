import React from 'react';
import massage from '../../assets/mail (3).png';
import overly from '../../assets/overly.png';
import { HiOutlineMail } from "react-icons/hi";

function Connect() {
    return (
        <div className=' mt-[400px] relative'>
            <img className=' absolute left-[25%] top-[-60px] z-[-1]' src={overly} alt='' />
            <div className='container'>
                <div className='flex justify-around'>
                    <div>
                        <h3 className=' text-[28px] font-bold text-[#42436A]'>Sign Up for Weekly Deals*</h3>
                        <p className='w-[350px] text-[14px]'>
                            Subscribe to our newsletter so we can spam you
                            with offers and discounts.
                        </p>
                        <div className=' flex items-center'>
                            <input className='w-[100%] p-[15px] border-[none] shadow-2xl' style={{ outline: 'none' }} type='email' placeholder='youremail address' />
                            <div className='bg-[#1CCF3D] w-[50px] p-[10px] flex justify-center text-[#FFF] text-[25px] rounded'>
                                <HiOutlineMail />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={massage} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Connect;