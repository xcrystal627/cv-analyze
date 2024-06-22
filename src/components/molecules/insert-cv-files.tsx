import React, { useEffect, useRef, useState } from "react";

type InsertCvFilesModalType = {
    files: File[];
    setFiles: (val: File[]) => void;
    modalOpen: boolean;
    setModalOpen: ( val: boolean) => void;
}

const InsertCvFilesModal = ({ modalOpen, setModalOpen, files, setFiles }: InsertCvFilesModalType) => {
    const modal = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [currentFiles, setCurrentFiles] = useState<File[]>(files);

    useEffect(() => {
        setCurrentFiles(files);
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
        setModalOpen(false);
        setFiles(currentFiles);
    }

    const onClickCancelHandle = () => {
        setModalOpen(false);
    }
    
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const fileArray = Array.from(files);
            setCurrentFiles(fileArray);
        }
    };


    return (
        <div className={`fixed inset-0 z-50  left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-[#00000080] px-4 py-5 ${modalOpen ? "block" : "hidden"  }`} >
            <div ref={modal} className="w-full max-w-[570px] rounded-sm bg-white px-8 py-12 text-center md:px-[50px] md:py-[40px] " >
                <div className="h-[450px]">
                    <button onClick={handleButtonClick} className="border-[1px] border-custom-black p-2 text-custom-black hover:opacity-70 transition-all duration-300">Open files</button>
                    <input className="hidden" type="file" ref={fileInputRef} multiple onChange={handleFileChange} />
                    {
                        currentFiles.length > 0 &&
                        <ul className="mt-5 list-item text-custom-black text-left space-y-1">
                            {
                                currentFiles.map((item, idx) => (
                                    <li key={idx}>{item.name}</li>
                                ))
                            }
                        </ul>
                    }
                </div>
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

export default InsertCvFilesModal;
