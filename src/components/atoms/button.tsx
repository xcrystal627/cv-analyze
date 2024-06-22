type ButtonType = {
    className?: string;
    label: React.ReactNode;
    onClick: () => void
}


const Button = ({ label, className, onClick }: ButtonType) => {
    return (
        <button  onClick={onClick}
            className={` ${className} w-full px-[20px] py-[10px]  font-semibold transition-all duration-300`}>
            {label}
        </button>
    )
}


export default Button;



