import React from 'react';
import bannerpic from '../../Assets/ILLUSTRATION.png'
import search from '../../Assets/search.png'
import media from '../../Assets/Group 117.png'

const Banner = () => {
    return (
        <div className='mx-[80px] relative pt-[10px] pb-[50px]'>

            <div className='border-2 rounded justify-evenly border-[#525DED] w-[90%] lg:w-[25%] p-[6px]  flex absolute top-[40px] right-[50px] '>
                <img className='h-[25px] mx-2' src={search} alt='search' />

                <p className='text-[#525DED] text-xl font-semibold'>  Search a Term | Topic</p>
            </div>

            <section className='grid grid-cols-1 lg:grid-cols-2 gap-2 my-20 '>

                <div>
                    <p className='text-[#525DED] text-[21px] mt-[50px]'>Claim a Free Quote</p>
                    <p className='text-[40px] font-bold mb-4'> <span className='border-b-4 border-[#f39c12]'>Get started</span> on fulfilling<br />
                        your Dubai or UAE<br />
                        dream.</p>
                    border-bottom: 6px solid

                </div>

                <div className='row-span-2'>
                    <img className='h-[520px]' src={bannerpic} alt='bannerimage' />
                </div>
                <div>
                    <p className='text-[#525DED] text-[21px] '>UAE & Offshore Company</p>
                    <p className='text-[#7f8c8d] text-[22px] font-bold my-3'>We provide you with information about UAE or<br />
                        Offshore Company Registration & help you<br />
                        setup your company with a bank account and<br />
                        visas.</p>

                    <div className=''>
                        <button className='text-white w-[220px] p-[12px] text-[20px] mt-[10px] bg-[#525DED] rounded-l border-2 border-[#525DED]'>Start a Company</button>
                        <button className=' text-[#525DED] w-[220px] p-[12px] text-[20px] mt-[10px] bg-white rounded-r border-2 border-[#525DED] font-semibold'>Renew a Company</button>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Banner;