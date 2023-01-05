import React from 'react';
import Logo from '../../Assets/Group 114.png'
import menu from '../../Assets/menu.webp'


const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <img className='p-4 w-[130px] lg:w-[150px]' src={Logo} alt='logoimage' />

                <ul className='flex'>

                    <div className='flex hidden lg:flex  '>
                        <li className='mr-[0px] lg:mr-[40px] text-[1px] lg:text-[20px] mt-[10px] p-[0px] lg:p-[10px]'>Home</li>
                        <li className='mr-[0px] lg:mr-[40px] text-[1px] lg:text-[20px] mt-[10px] p-[0px] lg:p-[10px]'>Services</li>
                        <li className='mr-[0px] lg:mr-[40px] text-[1px] lg:text-[20px] mt-[10px] p-[0px] lg:p-[10px]'>Pricing</li>
                        <li className='mr-[0px] lg:mr-[40px] text-[1px] lg:text-[20px] mt-[10px] p-[0px] lg:p-[10px]'>About Us</li>
                        <li ><button className='text-white bg-[#525DED] rounded-lg mt-[10px] p-[10px] w-[10%] lg:w-[100%] text-[1px] lg:text-[20px]'>Start a Company</button></li>

                    </div>
                    {/* Menu Image visible mobile device */}

                    <img className='h-[55px] mt-[15px] p-[10px]   lg:hidden ' src={menu} alt='menu' />

                </ul>
            </div>


        </div>
    );
};

export default Navbar;