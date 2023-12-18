import React from 'react'

const ProductService = () => {
    return (
        <div className='pt-20 pb-10 pl-20 pr-20'>
            <p className="text-[#1E1E1E] text-center font-inter text-[52px] font-bold tracking-[-1.04px] pb-20">
                Our Products & Services
            </p>
            <div className='flex productSection'>
                <div className='w-[772px] h-[260px] flex justify-center items-center productCard mr-5'>
                    <img src='/image1.svg' />
                    <div>
                        <p className='pr-15 pl-10 pb-3 text-[#1E1E1E] font-inter text-[25px] font-bold tracking-[-0.5px]'>CLOSETS</p>
                        <p className='pr-18 pl-10 text-[#635446] font-inter text-[16px] font-[400] leading-[150%]'>Closets and organization are our specialties.
                            We have so many ideas waiting for you!</p>

                    </div>
                </div>
                <div className='w-[772px] h-[260px] flex justify-center items-center productCard'>
                    <img src='/image1.svg' />
                    <div>
                        <p className='pr-15 pl-10 pb-3 text-[#1E1E1E] font-inter text-[25px] font-bold tracking-[-0.5px]'>Garage Storage</p>
                        <p className='pr-15 pl-10 text-[#635446] font-inter text-[16px] font-[400] leading-[150%]'>From power tools and lawnmowers to holiday decor, our system ensures your garage stays organized and everything is easy to find.</p>

                    </div>
                </div>
            </div>
            <div className='flex pt-5 productSection'>
                <div className='w-[772px] h-[260px] flex justify-center items-center productCard mr-5'>
                    <img src='/image1.svg' />
                    <div>
                        <p className='pr-15 pl-10 pb-3 text-[#1E1E1E] font-inter text-[25px] font-bold tracking-[-0.5px]'>HOME OFFICES</p>
                        <p className='pr-18 pl-10 text-[#635446] font-inter text-[16px] font-[400] leading-[150%]'>Create a home office where you are the boss. We are pros at designing a space where you can be productive and efficient.</p>

                    </div>
                </div>
                <div className='w-[772px] h-[260px] flex justify-center items-center productCard'>
                    <img src='/image1.svg' />
                    <div>
                        <p className='pr-15 pl-10 pb-3 text-[#1E1E1E] font-inter text-[25px] font-bold tracking-[-0.5px]'>PANTRIES</p>
                        <p className='pr-15 pl-10 text-[#635446] font-inter text-[16px] font-[400] leading-[150%]'>Dig in with these stunning pantry options. Food storage has never been more organized or easy.</p>

                    </div>
                </div>
            </div>
            <div className='flex pt-5 productSection'>
                <div className='w-[772px] h-[260px] flex justify-center items-center productCard mr-5'>
                    <img src='/image1.svg' />
                    <div>
                        <p className='pr-15 pl-10 pb-3 text-[#1E1E1E] font-inter text-[25px] font-bold tracking-[-0.5px]'>LAUNDRY ROOMS</p>
                        <p className='pr-18 pl-10 text-[#635446] font-inter text-[16px] font-[400] leading-[150%]'>Wash away that laundry day dread with a beautiful and classy laundry room.</p>

                    </div>
                </div>
                <div className='w-[772px] h-[260px] flex justify-center items-center productCard'>
                    <img src='/image1.svg' />
                    <div>
                        <p className='pr-15 pl-10 pb-3 text-[#1E1E1E] font-inter text-[25px] font-bold tracking-[-0.5px]'>MEDIA CENTERS</p>
                        <p className='pr-15 pl-10 text-[#635446] font-inter text-[16px] font-[400] leading-[150%]'>Dig in with these stunning pantry options. Food storage has never been more organized or easy.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductService