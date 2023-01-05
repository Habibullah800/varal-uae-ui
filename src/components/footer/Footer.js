import React from 'react';
import vector4 from '../../Assets/Vector-4.png'
import vector3 from '../../Assets/Vector-3.png'
import vector5 from '../../Assets/Vector-5.png'
import vector6 from '../../Assets/Vector-6.png'
import vector7 from '../../Assets/Vector-7.png'
import vector8 from '../../Assets/Vector-8.png'
import Group34 from '../../Assets/Group 34.png'


const Footer = () => {
    return (
        <div>
            <section className='grid grid-cols-1 lg:grid-cols-2'>
                <div >

                    <p className='text-[23px] font-bold border-l-4 border-indigo-500 pl-4 ml-[150px] my-[60px]'>Read about our blogs for more <br />
                        information on our processes </p>

                    <div className='flex justify-center  my-8'>
                        <img className='p-[15px] border border-indigo-600 rounded w-[90px] h-[90px] mr-6 ' src={vector4} alt='vector' />
                        <div>
                            <p className='text-[21px] font-semibold my-'>How to start a company<br />
                                formation in Dubai</p>
                            <p className='text-[#525DED] text-[20px] font-semibold '>5 Minutes</p>
                        </div>
                    </div>

                    <div className='flex justify-center  my-8'>
                        <img className='p-[15px] border border-indigo-600 rounded w-[90px] h-[90px] mr-6 ' src={vector4} alt='vector' />
                        <div>
                            <p className='text-[21px] font-semibold my-'>How to start a company<br />
                                formation in Dubai</p>
                            <p className='text-[#525DED] text-[20px] font-semibold '>5 Minutes</p>
                        </div>
                    </div>

                    <div className='flex hidden lg:flex justify-center mx-auto  my-8 bg-[#525DED] text-white py-5 w-[67%] rounded'>
                        <img className='p-[15px] border border-white rounded w-[90px] h-[90px] bg-white mr-6 ' src={vector4} alt='vector' />
                        <div>
                            <p className='text-[21px] font-semibold my-'>SEO Dubai: Who benefits<br />
                                the most?</p>
                            <p className=' text-[20px] font-semibold '>5 Minutes</p>
                        </div>
                    </div>

                    <p className='text-[23px] font-bold border-l-4 border-indigo-500 pl-4 ml-[150px] my-[60px]'>Satidfied We are When Our <br />
                        Customers Are Happy </p>

                    <div className='flex justify-center  my-8'>
                        <div className='border-b-4 border-indigo-500 mb-[20px] mr-6 '>
                            <img className='p-[8px] border border-indigo-600 rounded-full w-[60px] h-[60px] ' src={vector3} alt='vector' />
                        </div>
                        <div className=''>
                            <p className='text-[#7f8c8d] text-[21px] font-semibold my-'><strong className='text-black'>"</strong>I am very happy with them. I’ll <br />
                                continue to use their services in<br />
                                future & highly recommend them<br />
                                to anyone,<strong className='text-black'>"</strong></p>
                            <p className=' text-[19px] font-semibold my-3'>Muhib Abrar</p>
                        </div>
                    </div>


                    <div className='flex justify-center  my-8'>
                        <div className='border-b-4 border-indigo-500 mb-[20px] mr-6 '>
                            <img className='p-[8px] border border-indigo-600 rounded-full w-[60px] h-[60px] ' src={vector3} alt='vector' />
                        </div>
                        <div className=''>
                            <p className='text-[#7f8c8d] text-[21px] font-semibold my-'><strong className='text-black'>"</strong>Rama has a high level of integrity,<br />
                                intellect, knowledge of his<br />
                                business, resourcefulness and<br />
                                humanity,<strong className='text-black'>"</strong></p>
                            <p className=' text-[19px] font-semibold my-3'>Colin Saldahna</p>
                        </div>
                    </div>

                    <div className='flex hidden lg:flex justify-center  my-8'>
                        <div className='border-b-4 border-indigo-500 mb-[20px] mr-6 '>
                            <img className='p-[8px] border border-indigo-600 rounded-full w-[60px] h-[60px] ' src={vector3} alt='vector' />
                        </div>
                        <div className=''>
                            <p className='text-[#7f8c8d] text-[21px] font-semibold my-'><strong className='text-black'>"</strong>Your advise was so complete that I<br />
                                actually realized how beneficial<br />
                                this would be to my clients and my<br />
                                business.<strong className='text-black'>"</strong></p>
                            <p className=' text-[19px] font-semibold my-3'>Mark Swann</p>
                        </div>
                    </div>

                </div>


                <div>
                    <p className='text-[23px] font-bold border-l-4 border-indigo-500 
                    my-[60px] flex  mx-auto ml-[150px] pl-4    '>Get to know the whole us and<br />
                        more of our services</p>

                    <div className='grid grid-cols-2 lg:grid-cols-1 ml-[70px] lg:ml-[1px]'>
                        <div className='ml-[1px] lg:ml-[180px]'>
                            <p className='text-[23px] font-bold'>Services</p>

                            <p className='text-[#7f8c8d] text-[19px] font-semibold'> Products</p>
                            <p className='text-[#7f8c8d] text-[19px] font-semibold'>Solutions</p>
                            <p className='text-[#7f8c8d] text-[19px] font-semibold'>Assurance</p>
                            <p className='text-[#7f8c8d] text-[19px] font-semibold'>FAQ</p>
                            <p className='text-[#7f8c8d] text-[19px] font-semibold'>Working at Varal-Singhania</p>
                        </div>

                        <div className='ml-[1px] lg:ml-[180px] '>
                            <p className='text-[23px] font-bold mt-1 lg:mt-12'>Policy</p>
                            <p className='text-[#7f8c8d] text-[19px] font-semibold'> Privacy Policy</p>
                            <p className='text-[#7f8c8d] text-[19px] font-semibold'>Terms & Conditions</p>
                        </div>

                        <div className='ml-[1px] lg:ml-[180px] '>
                            <p className='text-[23px] font-bold mt-4 lg:mt-12'>About</p>
                            <p className='text-[#7f8c8d] text-[19px] font-semibold'>About Us</p>
                            <p className='text-[#7f8c8d] text-[19px] font-semibold'>Contact Us</p>
                        </div>

                        <div className='ml-[1px] lg:ml-[180px] row-span-3 '>
                            <p className='text-[23px] font-bold mt-4 lg:mt-12'>Address</p>
                            <p className='text-[#7f8c8d] text-[19px] font-semibold'>
                                608 One Lake Plaza, Cluster T,<br />
                                Al Sarayat Street, Jumeirah<br />
                                Lake Towers<br />
                                Dubai<br />
                                United Arab Emirates<br />
                            </p>
                            <p className='hidden lg:flex text-[#7f8c8d] text-[19px] font-semibold mt-12'>
                                Office Hours: Sunday to<br />
                                Thursday 8:30 AM to 6:30 PM<br />
                                [GMT+4]<br />
                                M: +971 55 794 2016<br />
                                O: +971 4 447 2061<br />
                            </p>
                        </div>

                        <div className='ml-[1px] lg:ml-[180px] '>
                            <p className='text-[23px] font-bold mt-12'>Subscribe Now
                            </p>
                            <p className='hidden lg:flex text-[#7f8c8d] text-[19px] font-semibold'>
                                Sunbscribe now to receive our<br />
                                Newsletters about amazing<br />
                                opportunities in Dubai<br />
                            </p>
                        </div>

                        <div className='flex justify-evenly items-center w-[90%] mx-auto my-10 ml-[1px] lg:ml-[80px]  row-span-2'>
                            <p className='text-[#7f8c8d] text-[19px] font-semibold'>Enter email address</p>
                            <img src={Group34} alt='vector5' />
                        </div>

                        <div className='flex justify-evenly w-[60%] mx-auto my-10'>
                            <img src={vector5} alt='vector5' />
                            <img src={vector6} alt='vector6' />
                            <img src={vector7} alt='vector7' />
                            <img src={vector8} alt='vector8' />
                        </div>
                    </div>

                </div>

            </section>

            <p className='text-[20px] text-center text-[#7f8c8d] font-semibold mt-[60px] mb-[100px]'>Varaluae 2021 © All Right Reserved</p>

        </div>
    );
};

export default Footer;