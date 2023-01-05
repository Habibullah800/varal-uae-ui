import React from 'react';
import groupPic from '../../Assets/Group.png'
import groupPic1 from '../../Assets/Group-1.png'
import groupPic12 from '../../Assets/ILLUSTRATION 03  1.png'
import groupPic3 from '../../Assets/Group-2.png'
import vector from '../../Assets/Vector.png'
import Ellipse14 from '../../Assets/Ellipse 14.png'
import Ellipse19 from '../../Assets/Ellipse 19.png'
import Ellips21 from '../../Assets/Ellipse 21.png'

const CardFeature = () => {
    return (
        <div className='relative '>
            <img className='absolute top-[0px] left-[610px]' src={Ellips21} alt='vector' />
            <img className='absolute bottom-[1010px] right-[670px]' src={Ellipse19} alt='vector' />
            <img className='absolute bottom-[775px] left-[300px]' src={Ellipse14} alt='vector' />
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-2 my-[100px] py-[80px] mx-[10%]'>
                <section>
                    <p className='text-[20px] font-semibold my-4 mt-[50px] text-center lg:text-left'>
                        Learn the ways in which you can benefit<br />
                        from a UAE/Offshore Company. Then get<br />
                        started on fulfilling your UAE dream.
                    </p>
                    <p className='text-[#525DED] text-[21px] text-center lg:text-left '>Claim a Free Quote</p>

                    <div className='border-[1px] border-[#7f8c8d] rounded p-12 w-[420px] mt-[50px] text-center lg:text-left mx-auto'>
                        <img className='mx-auto' src={groupPic12} alt='grouppic' />
                        <p className='text-[22px] font-semibold my-2'>Bank Account Setup</p>
                        <p className='text-[#7f8c8d] text-[18px]'>
                            There are many banks in the United<br />
                            Arab Emirates [UAE]. Both locally<br />
                            owned and branches of<br />
                            multinational ones. Foreign banks<br />
                            adjust according to their parent s<br />
                            strategies and have changed local<br />
                            requirements overnight in the past.<br />
                            But we are here to help you.
                        </p>
                        <div className='flex items-center my-4'>
                            <p className='text-[#525DED] text-[21px] '>Learn more
                            </p>
                            <img className='h-[20px] ml-2 ' src={vector} alt='Vimage' />
                        </div>
                    </div>


                    <div className='border-[1px] border-[#7f8c8d] rounded p-12 w-[420px] mt-[150px] text-center lg:text-left mx-auto'>
                        <img className='mx-auto' src={groupPic3} alt='grouppic' />
                        <p className='text-[22px] font-semibold my-2'>UAE Company Visas</p>
                        <p className='text-[#7f8c8d] text-[18px]'>
                            Your application for visas is critical<br />
                            especially if you intend to move to<br />
                            Dubai. This becomes even more<br />
                            urgent if your family will also move<br />
                            with you. All the paperwork is done<br />
                            on your behalf smoothly so that you<br />
                            may only focus on doing what<br />
                            matters most to you.
                        </p>
                        <div className='flex items-center my-4'>
                            <p className='text-[#525DED] text-[21px] '>Learn more
                            </p>
                            <img className='h-[20px] ml-2 ' src={vector} alt='Vimage' />
                        </div>
                    </div>


                </section>
                <section>
                    <div className='border-[1px] border-[#7f8c8d] rounded p-12 w-[420px] text-center lg:text-left mx-auto mt-[130px] lg:mt-[1px]'>
                        <img className='mx-auto' src={groupPic} alt='grouppic' />
                        <p className='text-[22px] font-semibold my-2'>Advice & Guidance</p>
                        <p className='text-[#7f8c8d] text-[18px]'>
                            All activities in the UAE are licensed.<br />
                            Whether manufacturing, finance,<br />
                            trading, marketing, consultancy or<br />
                            restaurants. In some countries only<br />
                            manufacturing is licensed. In others<br />
                            there is a threshold below which<br />
                            business are encouraged. Get our<br />
                            insightfull guidance today.
                        </p>
                        <div className='flex items-center my-4'>
                            <p className='text-[#525DED] text-[21px] '>Learn more
                            </p>
                            <img className='h-[20px] ml-2 ' src={vector} alt='Vimage' />
                        </div>
                    </div>

                    <div className='border-[1px] border-[#7f8c8d] rounded p-12 w-[420px] mt-[150px] text-center lg:text-left mx-auto'>
                        <img className='mx-auto' src={groupPic1} alt='grouppic1' />
                        <p className='text-[22px] font-semibold my-4'>Registration Document
                            Perparation</p>
                        <p className='text-[#7f8c8d] text-[18px]'>
                            Several documents must be<br />
                            prepared to start the process of<br />
                            registering a new company in the<br />
                            United Arab Emirates. Be it a Dubai<br />
                            local company, a free zone one or an<br />
                            offshore entity. Your registered<br />
                            agent is dedicated to get this done<br />
                            for you for a seamless process.
                        </p>
                        <div className='flex items-center'>
                            <p className='text-[#525DED] text-[21px] my-4'>Learn more
                            </p>
                            <img className='h-[20px] ml-2 ' src={vector} alt='Vimage' />
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <p className='text-[20px] font-semibold my-4 mt-[50px] text-center lg:text-left ml-[2px] lg:ml-[120px]'>We have gathered a team of<br />
                            professionals to craft adequate<br />
                            services you can rely on for a friction<br />
                            free setup in UAE.</p>
                        <div className='flex items-center my-4'>
                            <p className='text-[#525DED] text-[21px] mx-auto'>More about our services
                            </p>
                            <img className='h-[20px]  ' src={vector} alt='Vimage' />
                        </div>

                    </div>
                </section>
            </div>
        </div>

    );
};

export default CardFeature;