import React from 'react';
import Lock from '../../assets/lock-1 (3).png';
import { FaArrowRight } from "react-icons/fa";

function Serveices() {
    return (
        <div className=''>
            <div className='container relative'>
                <div className=' absolute left-[40px] top-[-10px] bg-[#F1F4FB] w-[400px] h-[400px]' style={{ borderRadius: '50%', zIndex: '-1' }}></div>
                <div className=' absolute left-[400px] top-[70px] bg-[#F1F4FB] w-[300px] h-[300px]' style={{ borderRadius: '50%', zIndex: '-1' }}></div>
                <div className=' absolute left-[550px] top-[115px] bg-[#F1F4FB] w-[300px] h-[300px]' style={{ borderRadius: '50%', zIndex: '-1' }}></div>
                <h3 className='text-[#FF1E74] mb-[50px] mr-[380px] text-center'>Login to see<br /> your free nights</h3>
                <div className=' flex justify-around'>
                    <div className='shadow-xl mt-[60px] h-[270px]'>
                        <div className='box bg-[#FFFFFF]'>
                            <div className='bg-[#F4EFFC]'>
                                <p className=' py-[10px] text-center text-[#8612EA] font-bold'>Happy Trip Loyalty programme</p>
                            </div>
                            <div>
                                <div className='flex'>
                                    <img className='p-[5px] m-[10px] border-[#BA99EF] border-2 border-dashed rounded' src={Lock} alt='' />
                                    <img className='p-[5px] m-[10px] border-[#BA99EF] border-2 border-dashed rounded' src={Lock} alt='' />
                                    <img className='p-[5px] m-[10px] border-[#BA99EF] border-2 border-dashed rounded' src={Lock} alt='' />
                                    <img className='p-[5px] m-[10px] border-[#BA99EF] border-2 border-dashed rounded' src={Lock} alt='' />
                                    <img className='p-[5px] m-[10px] border-[#BA99EF] border-2 border-dashed rounded' src={Lock} alt='' />
                                </div>
                                <div className=' flex'>
                                    <div className=' flex' >
                                        <img className='p-[5px] m-[10px] border-[#BA99EF] border-2 border-dashed rounded' src={Lock} alt='' />
                                        <img className='p-[5px] m-[10px] border-[#BA99EF] border-2 border-dashed rounded' src={Lock} alt='' />
                                        <img className='p-[5px] m-[10px] border-[#BA99EF] border-2 border-dashed rounded' src={Lock} alt='' />
                                        <img className='p-[5px] m-[10px] border-[#BA99EF] border-2 border-dashed rounded' src={Lock} alt='' />
                                        <img className='p-[5px] m-[10px] border-[#BA99EF] border-2 border-dashed rounded' src={Lock} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className=' flex justify-between my-[20px]'>
                                <p className='text-[#8612EA] font-bold text-[13px] ml-[15px] my-[0px]'>Collect 10 nights</p>
                                <div className='flex items-center'>
                                    <p className='text-[#8612EA] font-bold text-[13px] my-[0px] mr-[20px]'>Get 1 Night Free</p>
                                    <FaArrowRight className='mr-[10px] text-[#8612EA] text-[16px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className=' text-[#42436A] font-bold leading-10'>Happy Trip<br />Loyality Program</h3>
                        <div className='bg-[#8612EA] w-[100px] h-[4px] my-[15px]'></div>
                        <p className=' w-[480px] text-[14px]'>
                            As the world's largest student and youth travel company,
                            we've been booking affordable adventures for awesome humans
                            since 1979. Experts in Round the World flights, tours, accommodation
                            and good vibes - whatever your adventure, it starts right here.
                            As the world's largest student and youth travel company, we've been booking
                            affordable adventures for awesome humans since 1979. Experts in Round
                            the World flights, tours, accommodation and good vibes - whatever your adventure,
                            it starts right here. As the world's largest student and youth travel company, we've
                            been booking affordable
                            adventures for awesome good
                            vibes - whatever your adventure, it starts right here.
                        </p>
                        <button className='bg-[#1CCF3D] text-[#FFF] font-bold w-[150px] py-[10px] my-[15px] rounded-md'>Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Serveices;