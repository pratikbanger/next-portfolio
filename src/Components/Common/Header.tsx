'use client'
import React, { useEffect, useRef, useState } from 'react';

const Header = () => {

    const langRef: any = useRef(null)
    const [active, setActive] = useState('home')
    const [isOpen, setIsOpen] = useState(false)
    const [lang, setLang] = useState('EN')

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [langRef]);

    return (
        <div className='relative'>

            {/* HEADER */}
            <div className="px-[171px] pt-[32px] pb-[8px]">
                <div className="flex justify-between">
                    {/* LEFT */}
                    <div className="flex gap-2">
                        <img src="/assets/images/SVG/logo.svg" alt="Logo" />
                        <p>Prateek</p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex gap-[32px]">
                        <p className={`${active !== 'home' && 'gray'}`}><span className='primary'>#</span>home</p>
                        <p className={`${active !== 'work' && 'gray'}`}><span className='primary'>#</span>work</p>
                        <p className={`${active !== 'about-me' && 'gray'}`}><span className='primary'>#</span>about-me</p>
                        <p className={`${active !== 'contacts' && 'gray'}`}><span className='primary'>#</span>contacts</p>
                        <div className='relative flex gap-1 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                            <p>{lang}</p>
                            <img src={`/assets/images/SVG/drop-down-${isOpen ? 'close' : 'open'}.svg`} alt="" />

                            {/* OPTIONS */}
                            {isOpen &&
                                <div ref={langRef} className="absolute flex flex-col top-[105%] left-0 p-2 gap-1 border border-[#ABB2BF]">
                                    <p
                                        className='hover:text-[#C778DD]'
                                        onClick={() => setLang('EN')}
                                    >
                                        EN</p>
                                    <p
                                        className='hover:text-[#C778DD]'
                                        onClick={() => setLang('JP')}
                                    >
                                        JP</p>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;
