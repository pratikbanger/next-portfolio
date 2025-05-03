import React from 'react';
import Header from '../Common/Header';
import HeroSection from './HeroSection';
import { pathPrefix } from '@/utils/pathPrefix';

const index = () => {
    return (
        <div>
            <Header />

            {/* MEDIA */}
            <div className="fixed bg-[#282C33] left-0 top-0 w-[32px] flex flex-col items-center p-0 gap-2">
                {/* <p className='w-[191px] h-[1px] gray  border-b'></p> */}
                <img src={pathPrefix("/assets/images/SVG/line.svg")} alt="" />

                <div className="flex flex-col gap-2">
                    <img
                        src={pathPrefix("/assets/images/SVG/github.svg")}
                        className='cursor-pointer'
                        alt="" />
                    <img
                        src={pathPrefix("/assets/images/SVG/dribble.svg")}
                        className='cursor-pointer'
                        alt="" />
                    <img
                        src={pathPrefix("/assets/images/SVG/figma.svg")}
                        className='cursor-pointer'
                        alt="" />
                </div>
            </div>

            <HeroSection />

            <div className="flex justify-center items-center h-[50rem]"> Hello</div>

        </div>
    );
}

export default index;
