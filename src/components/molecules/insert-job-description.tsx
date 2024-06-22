import React, { useEffect, useRef, useState } from "react";

type InsertJobDescriptionModalType = {
    jobDesc: string;
    setJobDesc: (val: string) => void;
    modalOpen: boolean;
    setModalOpen: ( val: boolean) => void;
}

const InsertJobDescriptionModal = ({ modalOpen, setModalOpen, jobDesc, setJobDesc }: InsertJobDescriptionModalType) => {
    const modal = useRef<HTMLDivElement>(null);
    const [content, setContent] = useState<string>(jobDesc);

    
    useEffect(() => {
        setContent(jobDesc);
    }, [modalOpen])


    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!modal.current) return;
            if ( !modalOpen || modal.current.contains(target as Node) ) return;
            setModalOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    }, [modalOpen]);

    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!modalOpen || keyCode !== 27) return;
            setModalOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    }, [modalOpen]);

    const onClickConfirmHandle = () => {
        setJobDesc(content);
        setModalOpen(false);
    }

    const onClickCancelHandle = () => {
        setModalOpen(false);
    }
    

    return (
        <div className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-[#00000080] px-4 py-5 ${modalOpen ? "block" : "hidden"  }`} >
            <div ref={modal} className="w-full max-w-[570px] rounded-sm bg-white px-8 py-12 text-center md:px-[50px] md:py-[40px] " >
                <textarea placeholder="Insert your job description here. You don't need to worry about the layout or structure. Just include the essence of the job, tasks, deliverables, requirements, qualifications, skills, etc." className="w-full h-[450px] rounded-lg text-custom-black outline-none border-[1px] p-4" value={content} onChange={(e) => setContent(e.target.value)}>
                </textarea>
                <div className="mt-5 flex justify-center gap-[20px]">
                    <button
                        onClick={() => onClickConfirmHandle()}
                        className="bg-[#000300] text-white font-semibold w-full md:w-[150px] rounded-md border border-stroke p-3 text-center hover:opacity-70 transition-all duration-300"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={() => onClickCancelHandle()}
                        className="bg-[#4E4E4E] text-white font-semibold w-full md:w-[150px] rounded-md border border-stroke p-3 text-center hover:opacity-70 transition-all duration-300"
                        >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InsertJobDescriptionModal;
