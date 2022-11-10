import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image1 from '../../assets/1.png'
import Image2 from '../../assets/2.png'
import Image3 from '../../assets/3.png'
import Image4 from '../../assets/4.png'

function CardItem() {
    return (
        <div className='my-[80px]'>
            <div className='container'>
                <div className=' flex justify-between flex-wrap'>
                    <div className='box w-[230px] cursor-pointer shadow'>
                        <img src={Image1} alt='' />
                        <p className='text-[13px] mt-[10px] px-[10px]'>Winter beach escapes 30% off</p>
                        <div className=' flex justify-between text-[13px] px-[10px]'>
                            <p className='text-[#5808D8] font-bold'>EXPLORE OUR DEALS</p>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div className='box w-[230px] cursor-pointer shadow'>
                        <img src={Image2} alt='' />
                        <p className='text-[13px] mt-[10px] px-[10px]'>Winter beach escapes 30% off</p>
                        <div className=' flex justify-between text-[13px] px-[10px]'>
                            <p className='text-[#5808D8] font-bold'>EXPLORE OUR DEALS</p>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div className='box w-[230px] cursor-pointer shadow'>
                        <img src={Image3} alt='' />
                        <p className='text-[13px] mt-[10px] px-[10px]'>Winter beach escapes 30% off</p>
                        <div className=' flex justify-between text-[13px] px-[10px]'>
                            <p className='text-[#5808D8] font-bold'>EXPLORE OUR DEALS</p>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div className='box w-[230px] cursor-pointer shadow'>
                        <img src={Image4} alt='' />
                        <p className='text-[13px] mt-[10px] px-[10px]'>Winter beach escapes 30% off</p>
                        <div className=' flex justify-between text-[13px] px-[10px]'>
                            <p className='text-[#5808D8] font-bold'>EXPLORE OUR DEALS</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardItem;