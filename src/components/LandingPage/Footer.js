import React from 'react';
import Logo from '../../assets/logo.png';
import Help from '../../assets/help.png';
import { HiPhone, HiMail } from "react-icons/hi";

function Footer() {
    return (
        <div className='footer mt-[150px]'>
            <div className='foot'>
                <div className='container'>
                    <div className='flex justify-around py-[60px]'>
                        <div>
                            <h6 className='mb-[20px]'>CONTACT</h6>
                            <img className='w-[120px] mb-[10px]' src={Logo} alt='' />
                            <div className='flex items-center'>
                                <HiPhone />
                                <p className='mb-[0] px-[5px] font-[500]'>1234 567 890</p>
                            </div>
                            <div className='flex items-center'>
                                <HiMail />
                                <p className='mb-[0] font-[500]'>happytrip@sales.com</p>
                            </div>
                        </div>
                        <div>
                            <h6 className='mb-[20px]'>USEFUL LINKS</h6>
                            <p>Home</p>
                            <p>Flights</p>
                            <p>hotels</p>
                            <p>Deals</p>
                            <p>Discounts</p>
                        </div>
                        <div>
                            <h6 className='mb-[20px]'>SOCIAL</h6>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>
                        <div>
                            <h6 className='mb-[20px]'>OTHER INFO</h6>
                            <p>About</p>
                            <p>Contact</p>
                            <p>Help</p>
                            <p>Sitemap</p>
                            <p>Mediakit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center my-[20px] relative'>
                <p>© 2019 Happytrip. Designed by ramony</p>
                <div className='cursor-pointer absolute left-[90%] top-[-50px] flex items-center justify-center w-[50px] h-[50px] bg-[#FF1E74] rounded-[50%]'>
                    <img className='w-[30px]' src={Help} alt='' />
                </div>
            </div>
        </div>
    )
}
export default Footer;