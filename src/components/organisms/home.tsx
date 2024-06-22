"use client" 

import { useState } from "react";
import Button from "../atoms/button";
import InsertJobDescriptionModal from "../molecules/insert-job-description";
import InsertCvFilesModal from "../molecules/insert-cv-files";

const Home = () => {
    
    const [openJob, setOpenJob] = useState<boolean>(false);
    const [openUpload, setOpenUpload] = useState<boolean>(false);
    const [jobDesc, setJobDesc]  = useState<string>("");
    const [files, setFiles] = useState<File[]>([]);


    const onClickAnalyze = () => {
        
    }

    return (
        <div className="w-full mx-auto relative">
            <div className="flex justify-between items-center flex-col md:flex-row">
                <h1 className="text-2xl text-white leading-[1.1] text-center md:text-left md:text-[42px] lg:text-[53px] font-bold py-[100px]">
                    Evaluate a CV of <br />
                    a candidate with AI
                </h1>
                <div className="lg:pr-[100px] flex items-center flex-col">
                    <div className="w-full">
                        {
                            jobDesc == "" ? 
                            <div className="group w-[160px]">
                                <Button label={<p>Paste your <br /> job description</p> } className="text-[15px] bg-[#3A3A3A] text-white block group-hover:hidden" onClick={() => setOpenJob(true)}/>
                                <Button label={<p>Job Description <br /> Pasted!</p> }  className="text-[15px] bg-gradient-to-b from-[#0f1f11] to-[#32a52f] hidden group-hover:block" onClick={() => setOpenJob(true)}/>
                            </div>
                            :
                            <div className="group w-[160px]">
                                <Button label={<p>Job Description <br /> Pasted!</p> }  className="text-[15px] bg-gradient-to-b from-[#0f1f11] to-[#32a52f] block group-hover:hidden " onClick={() => setOpenJob(true)}/>
                                <Button label={<p>Paste your <br /> job description</p> } className="text-[15px] bg-[#3A3A3A] text-white hidden group-hover:block" onClick={() => setOpenJob(true)}/>
                            </div>
                        }
                    </div>
                    <div className="mt-[70px] w-full">
                        {                            
                            files.length == 0 ? 
                            <div className="group w-[160px]">
                                <Button label={<p>Upload some <br /> CV</p> } className="text-[15px] bg-[#3A3A3A] text-white block group-hover:hidden" onClick={() => setOpenUpload(true)}/>
                                <Button label={<p>CVs Uploaded! <br />  {files.length} </p> } className="text-[15px] bg-gradient-to-b from-[#0f1f11] to-[#32a52f] hidden group-hover:block" onClick={() => setOpenUpload(true)}/>
                            </div>
                            :
                            <div className="group w-[160px]">
                                <Button label={<p>CVs Uploaded! <br />  {files.length} </p> } className="text-[15px] bg-gradient-to-b from-[#0f1f11] to-[#32a52f] block group-hover:hidden" onClick={() => setOpenUpload(true)}/>
                                <Button label={<p>Upload some <br /> CV</p> } className="text-[15px] bg-[#3A3A3A] text-white  hidden group-hover:block" onClick={() => setOpenUpload(true)}/>
                            </div>
                        }
                    </div>
                    <button className="mt-[105px] leading-[1] text-[15px] bg-[#32a52f] w-full px-[20px] py-[10px] text-white font-semibold hover:opacity-75 transition-all duration-300 " onClick={() => onClickAnalyze()}>
                        Analyze  <br /> <span className="text-[12px]">(10 tokens)</span> 
                    </button>
                </div>
                <InsertCvFilesModal files={files} setFiles={ (val) => setFiles(val)} modalOpen={openUpload} setModalOpen={(val) => setOpenUpload(val)} />
                <InsertJobDescriptionModal jobDesc={jobDesc} setJobDesc={ (val) => setJobDesc(val)} modalOpen={openJob} setModalOpen={(val) => setOpenJob(val)} />
            </div>
        </div>
    )
}

export default Home;