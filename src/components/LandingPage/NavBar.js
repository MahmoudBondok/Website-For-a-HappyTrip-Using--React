import React from 'react';
import Logo from '../../assets/logo.png';
import Man from '../../assets/log.png';
import Group from '../../assets/group.png';
import img from '../../assets/Image.png';
import { FaHome, FaPlane, FaHotel } from "react-icons/fa";
import { Dropdown, DropdownButton, } from 'react-bootstrap';

function NavBar() {
    return (
        <div className=''>
            <div className='container'>
                <div className='navbar text-white flex justify-between items-center p-4 relative z-50'>
                    <div className=''>
                        <img className=' w-[130px]' src={Logo} alt='' />
                    </div>
                    <div className='flex'>
                        <div className=' flex items-center mx-3'>
                            <FaHome />
                            <p className=' text-sm my-1 px-1 font-medium'>Home</p>
                        </div>
                        <div className=' flex items-center mx-3'>
                            <FaPlane />
                            <p className=' text-sm my-1 px-1 font-medium'>Flights</p>
                        </div>
                        <div className=' flex items-center mx-3'>
                            <FaHotel />
                            <p className=' text-sm my-1 px-1 font-medium'>Hotels</p>
                        </div>
                        <DropdownButton className='mx-3' id="dropdown-basic-button" title="Eng">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton className='mx-3' id="dropdown-basic-button" title="SAR">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <div className=' flex items-center mx-4'>
                            <img className=' w-[30px]' src={Man} alt='' />
                            <DropdownButton className='mx-3' id="dropdown-basic-button" title="Faisal">
                                <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">My Bookings</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Change Password</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                            </DropdownButton>
                            <div className='overlay absolute'>
                                <img className='op' src={img} alt='' />
                            </div>
                            <img className='op-image' src={Group} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='container '>
                    <div className=' w-[360px]'>
                        <h2 className='mt-[50px] mb-[35px] font-bold'>Looking For Hotel?</h2>
                        <div className=' flex justify-between items-center border-[2px] border-[#AA82EB] mb-[15px]  rounded-md p-[8px]'>
                            <div className='flex items-center  py-[12px] text-[#AA82EB] px-[50px] rounded-md' style={{ cursor: 'pointer' }}>
                                <FaPlane />
                                <h6 className='pl-[5px] m-0'>Flight</h6>
                            </div>
                            <div className=' flex items-center bg-[#5808D8] text-[#FFF] py-[12px] px-[50px] rounded-md' style={{ cursor: 'pointer' }}>
                                <FaHotel />
                                <h6 className='pl-[5px] m-0'>Hotel</h6>
                            </div>
                        </div>
                        <div>
                            <input type='text' placeholder='Select Destination' className='w-[100%] p-[15px] text-[#848489]' style={{ borderBottom: '2px solid #d6d6df', outline: 'none' }} />
                        </div>
                        <div className='flex justify-between my-[15px]'>
                            <div className='text-[#848489]'>
                                <input type='date' placeholder='Select' className='w-[160px] p-[15px] m-auto' style={{ borderBottom: '2px solid #d6d6df', outline: 'none' }} />
                            </div>
                            <div className='text-[#848489]'>
                                <input type='date' placeholder='Select ' className='w-[160px] p-[15px] m-auto ' style={{ borderBottom: '2px solid #d6d6df', outline: 'none' }} />
                            </div>
                        </div>
                        <div>
                            <input type='text' placeholder='2 Guests, 1 Room' className='w-[100%] p-[15px] text-[#848489]' style={{ borderBottom: '2px solid #d6d6df', outline: 'none' }} />
                        </div>
                        <button className=' mt-[20px] bg-[#1CCF3D] text-[#FFF] font-bold w-[100%] py-[15px] rounded-md'>Check Availibility</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default NavBar;