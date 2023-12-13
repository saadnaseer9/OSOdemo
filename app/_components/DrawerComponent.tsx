"use client"
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import Image from "next/image";

const Navbar = ({ nav, setNav }: { nav: boolean, setNav: React.Dispatch<React.SetStateAction<boolean>>; }) => {

    const menuItems = [
        { icon: <TbTruckDelivery size={25} className="mr-4" />, text: "Orders" },
        { icon: <MdFavorite size={25} className="mr-4" />, text: "Favorites" },
        { icon: <FaWallet size={25} className="mr-4" />, text: "Wallet" },
        { icon: <MdHelp size={25} className="mr-4" />, text: "Help" },
    ];

    return (
        <div className="flex justify-between items-center p-4 shadow-sm">
            <div
                className={
                    nav
                        ? "fixed top-0 left-0 w-[350px] sm:w-[350px] h-screen z-10 duration-300 bgColor"
                        : "fixed top-0 left-[-100%] w-[350px] h-screen z-10 duration-300 bgColor"
                }
            >
                <p className="absolute right-4 top-12 cursor-pointer text-color"> + New Search</p>
                <div className="md:hidden sm:block" style={{ position: "absolute", right: "-30px" }} onClick={() => setNav(false)}>
                    <Image src="/close.png" height={30} width={30} alt="icon" />
                </div>
                <h2 className="text-2xl p-5">
                    <Image src="/oso.png" alt="icon" width={30} height={30} />
                </h2>


                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "flex-end", height: "75vh" }}>
                    <div style={{ display: "flex", margin: "0px 20px", width: "90%", paddingBottom: "20px", borderBottom: "1px solid rgba(223, 227, 232, 1)" }}>
                        <p className="searchHistory">Clear search history </p>
                        <p className="reportIssue">Report issue</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", paddingTop: "20px", paddingLeft: "20px" }}>
                        <Image src="/Avatars.png" alt="ava" width={48} height={48} />
                        <div style={{ marginLeft: "10px" }}>
                            <p className="searchHistory">saadnaseer909@gmail.com</p>
                            <p className="logout">Logout</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;