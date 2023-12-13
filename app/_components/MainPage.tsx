"use client"
import React, { useState } from 'react'
import Drawer from './DrawerComponent'
import Image from 'next/image'

export const MainPage = () => {
    const [nav, setNav] = useState(true);

    return (
        <>
            <div className='flex justify-around'>
                <Drawer nav={nav} setNav={setNav} />

                <div className='flex items-start justify-end w-9/12 searchfield flex-col'>
                    <div className='flex w-full pb-4 suggestions-row'>
                        <div className='w-[300px] h-[80px] border-round'>
                            El Bistro restaurant Ibiza reviews
                        </div>
                        <div className='w-[300px] h-[80px] border-round'>
                            What is happening with the fires in Maui?
                        </div>
                        <div className='w-[300px] h-[80px] border-round'>
                            Review of Guardians of the Galaxy Vol 3
                        </div>
                    </div>
                    <div className="flex items-center justify-center rounded-s px-2 border">
                        <Image src="/space_dashboard.png" alt='icon' width={18} height={18} onClick={() => setNav(true)} />
                        <input
                            className="bg-transparent p-2 w-full focus:outline-none"
                            type="text"
                            placeholder="Search anything"
                        />
                        <Image src="/state.png" alt='icon' width={18} height={18} />

                    </div>


                </div>
            </div>
        </>
    )
}
