import React, { useEffect, useRef, useState, MutableRefObject } from "react";

const useClickOutside = (handler: () => void) => {
  const domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

type SelectType = {
    className?:string;
    label?: string;
    value: string;
    setValue: (val: string) => void;
    options: {
        value: string;
        label: string;
    }[]
}

const Select = ({ label, className, value, setValue, options}: SelectType) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const domNode = useClickOutside(() => {
        setDropdownOpen(false);
    });

    return (
        <div ref={domNode} className={` ${className} `}>
            {
                label != "" &&
                <label htmlFor={`id-${label}`} className="block text-left">{label}</label>    
            }
            <div id={`id-${label}`} className='relative inline-block mb-8 text-left w-full'>
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`bg-white w-full flex items-center rounded-[5px] px-5 py-[13px] text-base font-medium text-custom-black relative`}
                    >
                    {value}
                    <span className="absolute right-4 top-1/2 -translate-y-1/2">
                        <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`fill-current transition-all duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                        >
                        <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                        </svg>
                    </span>
                </button>
                <div
                className={`shadow-1 absolute left-0 z-40 mt-2 w-full rounded-md bg-white py-[10px] transition-all ${
                    dropdownOpen
                    ? 'top-full opacity-100 visible'
                    : 'top-[110%] invisible opacity-0'
                }`}
                >
                {
                    options.map((item,idx) => (
                        <div onClick={ () => setValue(item.value)} 
                            key={idx} className= " text-custom-black hover:font-semibold px-5 py-2 text-base transition-all duration-300 cursor-pointer">
                            {item.label}
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
  );
};

export default Select;
