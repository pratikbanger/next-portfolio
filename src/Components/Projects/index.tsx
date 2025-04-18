'use client'
import React from 'react';
import * as constact from './constant.json'

const index = () => {

    const Projects: any = constact
    // const [projects, setProjects] = useState(constant)
    console.log("🚀 ~ Projects:", Projects.list)


    return (
        <div className='flex flex-col gap-[48px] py-[74px]'>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <p className='text-[32px] font-medium'><span className='primary'>#</span>Projects</p>
                    <p className='border-b border-[#C778DD] w-[511px]'></p>
                </div>

                <button className='text-base font-medium'>View all ~~&gt;</button>
            </div>

            <div className="grid grid-cols-3 gap-y-[32px]">

                {Projects.list && Projects.list.slice(0, 3).map((item: any, index: any) => {
                    return (
                        <div key={index} className="flex flex-col border border-[#ABB2BF] hover:border-[#C778DD] w-[330px]">
                            <img
                                className='w-[330px]'
                                src={item.files}
                                alt=""
                            />

                            <div className="flex justify-between items-center p-4">
                                <a
                                    href={item.demo}
                                    target='_blank'
                                    className='p-2 px-4 border border-[#ABB2BF] hover:text-[#C778DD] hover:border-[#C778DD]'
                                >
                                    Live &lt;~&gt;
                                </a>
                                <a
                                    href={item.code}
                                    target='_blank'
                                    className='p-2 px-4 border border-[#ABB2BF] hover:text-[#C778DD] hover:border-[#C778DD]'
                                >
                                    Cached &ge;
                                </a>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    );
}

export default index;
