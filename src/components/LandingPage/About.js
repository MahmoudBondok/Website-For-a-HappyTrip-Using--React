import React from 'react';
import V1 from '../../assets/v1.png';
import V2 from '../../assets/v2.png';
import V3 from '../../assets/v3.png';

function About() {
    return (
        <div className='my-[200px]'>
            <div className='container'>
                <div className='flex justify-around'>
                    <div className=' relative'>
                        <img className=' absolute left-[80%] top-[-25px] w-[50px]' src={V1} alt='' />
                        <div className='w-[420px] shadow-xl p-[20px] border-l-[3px] border-l-[#FDD500] mb-[50px]'>
                            <h4 className='text-[15px] font-bold'>Superior Booking Experience</h4>
                            <p className='text-[14px]'>
                                Ease of booking, fantastic products and competitive
                                pricing makes the booking experience amazing
                            </p>
                        </div>
                        <img className=' absolute left-[100%] top-[150px] w-[50px]' src={V2} alt='' />
                        <div className='w-[420px] shadow-xl p-[20px] border-l-[3px] border-l-[#00D8FD] mb-[50px] absolute left-[100px]'>
                            <h4 className='text-[15px] font-bold'>Superior Booking Experience</h4>
                            <p className='text-[14px]'>
                                Ease of booking, fantastic products and competitive
                                pricing makes the booking experience amazing
                            </p>
                        </div>
                        <img className=' absolute left-[85%] top-[315px] w-[50px]' src={V3} alt='' />
                        <div className='w-[420px] shadow-xl p-[20px] border-l-[3px] border-l-[red] mb-[50px] absolute left-[40px] top-[340px]'>
                            <h4 className='text-[15px] font-bold'>Superior Booking Experience</h4>
                            <p className='text-[14px]'>
                                Ease of booking, fantastic products and competitive
                                pricing makes the booking experience amazing
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='w-[250px] pt-[180px]'>
                            <h4 className='text-[28px] font-bold'>Why work with us? </h4>
                            <p className='text-[14px]'>
                                Ease of booking, fantastic products and competitive
                                pricing makes the booking experience amazing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default About;