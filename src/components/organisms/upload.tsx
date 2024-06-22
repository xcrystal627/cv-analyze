"use client"

import { useState } from "react";
import Select from "../atoms/select";
import Button from "../atoms/button";

const options = [
    {
        label: "Frontend Developer",
        value: "frontend-developer"
    },
    {
        label: "ML Engineer",
        value: "ml-engineer"
    },
    {
        label: "Product Manager",
        value: "product-manager"
    },
    {
        label: "IT staff",
        value: "it-staff"
    },
]

const NewUpload = () => {

    const [role, setRole] = useState<string>(options[0].value);
    const [jobDesc, setJobDesc]  = useState<string>("");
    const [files, setFiles] = useState<File[]>([]);

    const onClickAnalyze = () => {

    }

    return (
        <div>
            <h3 className="text-white font-semibold text-lg md:text-2xl text-center">
                Add new candidates
            </h3>
            <div className="mt-5 text-center">
                <p className="text-md">Choose a role for CV evaluation from current jobs:</p>
                <Select className="w-[280px] mx-auto" value={role} setValue={(val) => setRole(val)}  options={options} />
            </div>
            <div className="mt-8 flex justify-center">
                {
                    jobDesc == "" ? 
                    <div className="group w-[320px]">
                        <Button label={<p>... or paste a new Job Description</p> } className="text-[15px] py-1 bg-white text-custom-black block group-hover:hidden" onClick={() => {}}/>
                        <Button label={<p>New Job Description Pasted!</p> }  className="text-[15px] py-1 bg-gradient-to-b from-[#0f1f11] to-[#32a52f] hidden group-hover:block" onClick={() => {}}/>
                    </div>
                    :
                    <div className="group w-[320px]">
                        <Button label={<p>New Job Description Pasted!</p> }  className="text-[15px] bg-gradient-to-b from-[#0f1f11] to-[#32a52f] block group-hover:hidden " onClick={() => {}}/>
                        <Button label={<p>... or paste a new Job Description</p> } className="text-[15px] hidden group-hover:block" onClick={() => {}}/>
                    </div>
                }
            </div>
            <div className="mt-8 flex justify-center">
                {                            
                    files.length == 0 ? 
                    <div className="group w-[160px]">
                        <Button label={<p>Upload new <br /> CVs</p> } className="text-[15px] bg-white text-custom-black block group-hover:hidden" onClick={() => {}}/>
                        <Button label={<p>New CVs <br />Uploaded! </p> } className="text-[15px] bg-gradient-to-b from-[#0f1f11] to-[#32a52f] hidden group-hover:block" onClick={() => {}}/>
                    </div>
                    :
                    <div className="group w-[160px]">
                        <Button label={<p>New CVs <br />Uploaded! </p> }  className="text-[15px] bg-gradient-to-b from-[#0f1f11] to-[#32a52f] block group-hover:hidden" onClick={() => {}}/>
                        <Button label={<p>Upload new <br /> CVs</p> } className="text-[15px]  hidden group-hover:block" onClick={() => {}}/>
                    </div>
                }
            </div>
            <div className="mt-8 flex justify-center">
                <button className=" w-[200px] leading-[1] text-[15px] bg-[#32a52f] px-[20px] py-[10px] text-white font-semibold hover:opacity-75 transition-all duration-300 " onClick={() => onClickAnalyze()}>
                    Analyze  <br /> <span className="text-[12px]">(10 tokens)</span> 
                </button>
            </div>
        </div>
    )
}


export default NewUpload;