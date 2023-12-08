import busketImage from "../../img/basket.webp";
import "./BusketButton.css";

const BusketButton = () => {
    return (
        <button className="busket-button">
            <img src={busketImage} alt="busket" />
        </button>
    );
};

export default BusketButton;