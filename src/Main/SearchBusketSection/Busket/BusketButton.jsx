import busketImage from "../../img/basket.webp";
import "./BusketButton.css";

const BusketButton = ({ onClickHandler }) => {
    return (
        <button onClick={onClickHandler} className="busket-button">
            <img src={busketImage} alt="busket" />
        </button>
    );
};

export default BusketButton;