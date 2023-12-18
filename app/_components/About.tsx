import React from 'react'

const About = () => {
    return (
        <div className="flex justify-center flex-wrap-reverse mt-[200px] mb-[100px]">
            <div className='mr-2 borderBox'>
                <img src='/company.svg' />
                <p className="text-[#1E1E1E] font-inter text-[28px] font-bold tracking-[-0.56px] mt-3 mb-6">THE COMPANY</p>
                <p className="text-[#635446] font-inter text-[16px]  font-[400] textShadow">
                    For over 35 years Classy Closets has been creating custom home storage solutions that are both beautiful and functional. You shouldn’t have to choose between one or the other, so we’ve adopted a belief that you don’t! Whether you are in search of the perfect master closet, kitchen, home office, or garage at Classy Closets, we do it all!
                </p>
            </div>
            <div className='mr-2 borderBox'>
                <img src='/carbon.svg' />
                <p className="text-[#1E1E1E] font-inter text-[28px] font-bold tracking-[-0.56px] mt-3 mb-6">THE CLASSY DIFFERENCE</p>

                <p className="text-[#635446] text-shadow-md font-inter text-[16px]  font-[400] textShadow_">
                    Each custom closet design is created specifically for your space, your home, and your life. After scheduling your free in-home consultation with Classy Closets, one of our professional designers will meet with you and discuss your wants and needs. They will assess your space and discuss our many design options with you. You can choose from a selection of materials, colors, styles, finishes, and hardware. At Classy Closets, the possibilities are truly endless!
                </p>
            </div>
            <div className='borderBox'>
                <img src='/ph_star.svg' />
                <p className="text-[#1E1E1E] font-inter text-[28px] font-bold tracking-[-0.56px] mt-3 mb-6">UNPARALLELED SERVICE</p>

                <p className="text-[#635446] text-shadow-md font-inter text-[16px]  font-[400] textShadow_">
                    At Classy Closets, our biggest priority is you. We want to make sure that you’re happy with your custom storage solution. Once you schedule a free in-home consultation with one of our professional designers, you’re sure to see the Classy Closets difference.
                    <br />
                    <span className='pt-20'>We want to make sure that you’re happy with your custom storage solution.</span>
                </p>
            </div>

        </div >
    )
}

export default About