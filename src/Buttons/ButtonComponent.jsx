import "./ButtonComponent.css";

const ButtonComponent = ({
    label,
    onClickHandler,
    type = "button",
    className,
}) => {
    return (
        <button 
            type={type} 
            className={`button ${className}`}
            onClick={onClickHandler}
        >
            {label}
        </button>
    );
};

export default ButtonComponent;