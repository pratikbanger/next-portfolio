import React from 'react';
import Project from '@/Components/Projects'
import { useTranslation } from 'react-i18next';

const HeroSection = () => {

    const { t, i18n } = useTranslation();

    return (
        <div>

            <div className="flex flex-col px-[171px] w-full">

                {/* MAIN SECTION */}
                <div className="flex gap-[18px] items-center">
                    {/* LEFT */}
                    <div className="flex flex-col w-[537px] h-[227px] gap-[32px]">
                        {/* <p className='text-[32px] font-medium'>Prateek is a <span className='primary'>Frontend</span> and <span className='primary'>Backend</span> Developer</p> */}
                        <p className='text-[32px] font-medium' dangerouslySetInnerHTML={{ __html: t("heroHeadLine") }}></p>

                        <div className="flex flex-col gap-6">
                            {/* <p className='text-base gray w-[463px]'>He crafts responsive websites where technologies meet creativity</p> */}
                            <p className='text-base gray w-[463px]'>{t('heroTagLine')}</p>
                            <button className='border border-[#C778DD] w-[148px] h-[37px]'>Contact me!!</button>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col">
                        <img src="/assets/images/SVG/hero-image.svg" alt="" />

                        <div className='w-full flex items-center p-2 gap-2.5 border border-[#ABB2BF]'>
                            <div className='w-4 h-4 border border-[#C778DD] bg-[#C778DD] '></div>
                            <p className='gray'>Currently working on <span className='white'>Portfolio</span></p>
                        </div>
                    </div>
                </div>

                {/* QUOTE */}
                <div className="flex px-[155px] py-[80px] justify-center">

                    <div className="relative flex">

                        <img
                            className='absolute left-[12px] top-[-15px]'
                            src="/assets/images/SVG/quote.svg"
                            alt=""
                        />

                        <p className='border border-[#ABB2BF] p-[32px]'>With great coding skills comes great electricty bill</p>
                        <p className='absolute border border-[#ABB2BF] p-[16px] right-0 bottom-[-57px]'>- Dr. Who</p>

                        <img
                            className='absolute right-[10px] bottom-[-12px]'
                            src="/assets/images/SVG/quote.svg"
                            alt=""
                        />

                    </div>

                </div>

                <Project />

            </div>
        </div>
    );
}

export default HeroSection;
