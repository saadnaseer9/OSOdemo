import React from "react";

const Hero = () => {
    return (
        <div>
            <img
                src="/hero.png"
                alt="hero"
                className="relative w-full "
            />
            <p className="sm:text-base sm:top-[50px] sm:w-full sm:pl-0 sm:pt-0 sm:leading-normal md:text-5xl md:font-bold md:tracking-[-2.4px] md:text-[#752739] sm:text-[#752739] sm:absolute md:absolute md:top-[200px] md:w-[43%] md:pl-[9%] md:pt-[30px] md:leading-[60px]">
                Discover Elegance with Classy Closets - Claim Your
                $500 Discount Today!*
            </p>

            <div className="pt-10 pl-[8%] flex items-center">
                <img src="/Callus.svg" />
                <div className="flex">
                    <img src="/instagram.svg" className="pl-[40px]" />
                    <img src="/facebook.svg" className="pl-[10px]" />
                    <img src="/youtube.svg" className="pl-[10px]" />
                    <img src="/pinterest.svg" className="pl-[10px]" />
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-center text-[#1E1E1E] font-inter text-[20px] font-bold leading-[130%] ml-20">Schedule a FREE <br />Consultation</p>
                    <img src="/arrow.svg" />
                </div>
            </div>

            <div className="flex justify-end absolute top-[230px] right-[100px] ">
                <div className="block rounded-lg bg-white p-6 shadow-2xl w-[65%] formGrid">
                    <form>
                        <div className="flex justify-center flex-col items-center">
                            <p className="text-center text-[#1E1E1E] font-inter text-[32px] font-semibold leading-normal tracking-[-1.28px] w-[80%]">
                                Complete the form to get started today!
                            </p>
                        </div>
                        <p className="text-[#1E1E1E] font-inter text-[20px] font-[400] leading-[130%] pl-[45px] pt-2 pb-4 w-[90%]">
                            Your custom storage solution is just a few
                            steps away!
                        </p>
                        <div className="grid grid-cols-2 gap-1">
                            <div
                                className="relative mb-6"
                                data-te-input-wrapper-init
                            >
                                <input
                                    type="text"
                                    className="rounded-[6px]  bg-white flex p-[14px] [16px] justify-center gap-[8px] items-stretch"
                                    id="exampleInput123"
                                    aria-describedby="emailHelp123"
                                    style={{
                                        border:
                                            "1px solid var(--Gray-300, #DEE2E6)",
                                        width: "95%",
                                    }}
                                    placeholder="First name"
                                />
                            </div>

                            <div
                                className="relative mb-6"
                                data-te-input-wrapper-init
                            >
                                <input
                                    type="text"
                                    className="rounded-[6px] border border-gray-300 bg-white flex p-[14px] [16px] justify-center gap-[8px] items-stretch"
                                    id="exampleInput124"
                                    aria-describedby="emailHelp124"
                                    style={{
                                        border:
                                            "1px solid var(--Gray-300, #DEE2E6)",
                                        width: "95%",
                                    }}
                                    placeholder="Last name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                            <div
                                className="relative mb-6"
                                data-te-input-wrapper-init
                            >
                                <input
                                    type="text"
                                    className="rounded-[6px]  bg-white flex p-[14px] [16px] justify-center gap-[8px] items-stretch"
                                    id="exampleInput123"
                                    aria-describedby="emailHelp123"
                                    style={{
                                        border:
                                            "1px solid var(--Gray-300, #DEE2E6)",
                                        width: "95%",
                                    }}
                                    placeholder="First name"
                                />
                            </div>

                            <div
                                className="relative mb-6"
                                data-te-input-wrapper-init
                            >
                                <input
                                    type="text"
                                    className="rounded-[6px] border border-gray-300 bg-white flex p-[14px] [16px] justify-center gap-[8px] items-stretch"
                                    id="exampleInput124"
                                    aria-describedby="emailHelp124"
                                    style={{
                                        border:
                                            "1px solid var(--Gray-300, #DEE2E6)",
                                        width: "95%",
                                    }}
                                    placeholder="Last name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-1">
                            <div
                                className="relative mb-6 col-span-8"
                                data-te-input-wrapper-init
                            >
                                <input
                                    type="text"
                                    className="rounded-[6px] bg-white flex p-[14px] [16px] justify-center gap-[8px] items-stretch"
                                    id="exampleInput123"
                                    aria-describedby="emailHelp123"
                                    style={{
                                        border:
                                            "1px solid var(--Gray-300, #DEE2E6)",
                                        width: "95%",
                                    }}
                                    placeholder="First name"
                                />
                            </div>

                            <div
                                className="relative mb-6 col-span-4"
                                data-te-input-wrapper-init
                            >
                                <input
                                    type="text"
                                    className="rounded-[6px] border border-gray-300 bg-white flex p-[14px] [16px] justify-center gap-[8px] items-stretch"
                                    id="exampleInput124"
                                    aria-describedby="emailHelp124"
                                    style={{
                                        border:
                                            "1px solid var(--Gray-300, #DEE2E6)",
                                        width: "95%",
                                    }}
                                    placeholder="Last name"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="flex w-[168px] p-[16px] [24px] justify-center items-center gap-[8px] rounded-[67px] bg-[#1E1E1E] text-[#FFFFFF]"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;
