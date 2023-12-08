import { useState } from "react";
import BusketButton from "./BusketButton";
import "./BusketModal.css";

const BusketModal = () => {
    const [ modal, setModal ] = useState(false);

    const openCloseModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <BusketButton onClickHandler={openCloseModal}/>
            {modal && (
                <div className="modal">
                    <div onClick={openCloseModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Hello Modal</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti deleniti, maxime laudantium at similique quo doloremque eaque possimus quos eius explicabo iure saepe mollitia ex. Voluptates, magni. Aliquam, iusto? Reprehenderit facere explicabo minima excepturi tempore adipisci? Tempore illum qui ullam! Enim, magnam? Tempora explicabo blanditiis mollitia dignissimos, possimus maiores.
                        </p>
                        <button onClick={openCloseModal} className="close-modal-button">Close</button>
                    </div>
                </div>
            )}
        </>        
    );
};

export default BusketModal;