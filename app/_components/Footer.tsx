import React from 'react'

const Footer = () => {
    return (
        <div className="bg-[#1E1E1E] h-[180px] flex items-center justify-between pl-20 pr-20">
            <img src='/ClassyClosets.svg' />
            <div>
                <div className='flex items-end justify-end pb-3' >
                    <img src='/icons_instagram.svg' className='mr-3' />
                    <img src='/cons_facebook.svg' className='mr-3' />
                    <img src='/icons_youtube.svg' className='mr-3' />
                    <img src='/icons_pinterest.svg' />

                </div>
                <p className="text-white text-right font-inter text-[18px] font-[400] leading-[150%]">
                    © 2023 Classy Closets, All Rights Reserved <br />
                    Privacy Policy | Terms

                </p>
            </div>
        </div>
    )
}

export default Footer