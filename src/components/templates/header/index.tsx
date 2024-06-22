"use client"


import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import ProfileMenu from "./profile-menu";


 

const Header = () => {


    const { isAuthenticated, user, signIn, signOut } = useAuth();
    const [menuShow, setMenuShow]=useState<boolean>(false);


    return (
        <header className="pt-[20px] z-[99] top-5 max-w-[1400px] mx-auto w-full font-sans">
            <div className="  text-[#929191] rounded-md py-[5px] mx-[10px] sm:mx-[20px]">
                <div className="flex justify-between px-[20px] py-2">
                    <div className="flex justify-start items-center gap-5">
                        <Link href="/"
                            className="flex justify-start items-center group cursor-pointer">
                            <h1 className="text-2xl md:text-3xl font-bold">
                                CV-ANALYZE
                            </h1>
                        </Link>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="hidden md:flex justify-end items-center">
                            <Link href="/" className="bg-[#141614] text-white font-semibold py-[5px] text-center w-[120px] hover:opacity-70 transition-all duration-300">
                                Home
                            </Link>
                            <Link href="/" className="bg-[#141614] text-white font-semibold py-[5px] text-center w-[120px] mx-[15px] hover:opacity-70 transition-all duration-300">
                                Jobs
                            </Link>
                            <Link href="/upload" className="relative text-[15px] font-semibold text-white bg-[#077E1A] py-[20px] px-[20px] hover:opacity-70 transition-all duration-300">
                                Upload new CVs
                                <p className="absolute text-[10px] left-1/2 -translate-x-1/2 top-[60%]">
                                    10 tokens
                                </p>
                            </Link>
                        </div>
                        <div className="ml-[10px]">
                            {
                                isAuthenticated ?
                                <div className="">
                                    <Image className="rounded-full cursor-pointer" src={user.multiFactor.user.photoURL} width={50} height={50} alt={user.multiFactor.user.displayName} 
                                        onClick={() => setMenuShow(true)} />
                                    <ProfileMenu menuShow={menuShow} setMenuShow={(val) => setMenuShow(val)} />
                                </div>
                                :
                                <button onClick={signIn} className="hover:opacity-75 transition-all duration-300">
                                    SignIn
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>    
        </header>
    )
}



export default Header;


