import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";


const ProfileMenu = ({menuShow, setMenuShow}:{menuShow: boolean, setMenuShow: (val:boolean) => void}) => {
  
  const profileMenu = useRef<HTMLDivElement>(null);
  const {signOut} = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (profileMenu.current && !profileMenu.current.contains(e.target as Node)) {
        setMenuShow(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const onClickSignOutHandle = () => {
    setMenuShow(false);
    signOut && signOut();
    router.push('/');
  }

  
  return (
    <div ref={profileMenu} 
      className={`absolute  bg-[#161d28]  rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10 top-[70px] right-[20px] w-[180px]
                transform transition-all duration-300 ${menuShow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <ul className={`space-y-3 py-[15px] px-[20px] ${menuShow ? "block" : "hidden"}`}>
        <div className="space-y-3 block md:hidden">
          <li className="text-[#e2e2e2]">
            <Link href="">
              Home
            </Link>
          </li>
          <li className="text-[#e2e2e2]">
            <Link href="">
              Jobs
            </Link>
          </li>
          <li className="text-[#e2e2e2]">
            <Link href="">
              Upload
            </Link>
          </li>
        </div>
        <li className="text-[#e2e2e2]">
          <button className="text-[14px] font-medium" onClick={() => onClickSignOutHandle()}>
            SignOut
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
