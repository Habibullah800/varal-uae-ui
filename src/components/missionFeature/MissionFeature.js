import React from 'react';
import dungoin from '../../Assets/dungeon.png'
import Vector2 from '../../Assets/Vector-2.png'
import Vector1 from '../../Assets/Vector-1.png'

const MissionFeature = () => {
    return (
        <div className='my-8 mx-auto'>
            <p className='text-[30px] font-bold text-center mb-6'> <span className='border-b-4 border-[#f39c12]'>Dedicated</span><br />
                to our mission we are</p>

            <p className='text-center text-[#7f8c8d] text-2xl'>Our services include Company Formation & Renewals,<br />
                Trust & Fiduciary, Tax Residency Setup With Family, Bank<br />
                Accounts, Remote Management, Stock Trading<br />
                Platforms, Ownership Solutions</p>

            <section className='grid grid-cols-1 lg:grid-cols-3 gap-2 my-20 px-[8%]'>
                <div className='mx-auto lg:mx-[1px]'>
                    <img className='my-5 h-[45px] mx-auto lg:mx-[1px]' src={dungoin} alt='featurePic' />
                    <p className='text-[22px] font-semibold my-2'>UAE Free Zone Company</p>
                    <p className='text-[#7f8c8d] text-[18px]'>Your registration agent, will answer all<br />
                        of your questions and help you to reach<br />
                        a conclusion that meets your objectives<br />
                        of investing in the UAE</p>
                    <p className='my-4 text-[21px] text-[#f39c12]'>Get Started</p>
                </div>
                <div className='mx-auto lg:mx-[1px]'>
                    <img className='my-5 h-[45px] mx-auto lg:mx-[1px]' src={Vector2} alt='featurePic' />
                    <p className='text-[22px] font-semibold my-2'>Dubai Local Companies</p>
                    <p className='text-[#7f8c8d] text-[18px]'>
                        The Dubai LLC formation documents<br />
                        are actually articles of organization or a<br />
                        certificate of organization. You can get<br />
                        yours today</p>
                    <p className='my-4 text-[21px] text-[#f39c12]'>Get Started</p>
                </div>
                <div className='mx-auto lg:mx-[1px] '>
                    <img className='my-5 h-[45px] mx-auto lg:mx-[1px]' src={Vector1} alt='featurePic' />
                    <p className='text-[22px] font-semibold my-2'>Offshore Compamies</p>
                    <p className='text-[#7f8c8d] text-[18px]'>You can register an offshore company<br />
                        and open its bank account in Dubai.<br />
                        Your agent will help you along all the<br />
                        process</p>
                    <p className='my-4 text-[21px] text-[#f39c12]'>Get Started</p>
                </div>

            </section>
        </div>
    );
};

export default MissionFeature;