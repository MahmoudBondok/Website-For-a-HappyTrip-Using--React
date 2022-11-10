import React from 'react';
import mob from '../../assets/mob.png'
import mob2 from '../../assets/mob2.png'
import mob3 from '../../assets/mob3.png'
import mob4 from '../../assets/mask.png'

function App() {
    return (
        <div className='bg-[#8612EA] my-[100px] py-[180px] text-[#FFF]'>
            <div className='container'>
                <div className='flex justify-around m-auto relative '>
                    <div>
                        <h2 className=' font-bold'>Get the Happy Trip App !</h2>
                        <p className=' w-[350px] text-[14px]'>
                            Looking to manage your flight and hotel needs
                            efficiently? BlazeBe does exactly that for you
                            in a few simple taps with artistic user interface
                            and secure payment channels.
                        </p>
                        <button className='text-[#FFF] font-bold w-[150px] py-[10px] my-[15px] rounded-md bo' style={{ borderWidth: '2px' }}>Explore More</button>
                    </div>
                    <div className=''>
                        <img className='absolute left-[50%] top-[30px] w-[300px]' src={mob} alt='' />
                        <img className='absolute left-[70%] top-[-60px] w-[300px]' src={mob2} alt='' />
                        <img className='absolute left-[60%] top-[-90px] w-[300px]' src={mob3} alt='' />
                        <img className='absolute left-[-75px] top-[190px] w-[250px]' src={mob4} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;