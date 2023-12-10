import { useState } from "react";
import BusketButton from "./BusketButton";
import "./BusketModal.css";
import BasketProductComponent from "./BasketProductComponent";

const BusketModal = ({ basketData, setBasketData }) => {
    const [ modal, setModal ] = useState(false);

    const openCloseModal = () => {
        setModal(!modal);
    };

    const existingProdctsKeys = [];

    return (
        <>
            <BusketButton onClickHandler={openCloseModal}/>
            {modal && (
                <div className="modal">
                    <div onClick={openCloseModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Basket</h2>
                        <div className="basket-products">
                            {
                                basketData && basketData.map((product) => {
                                    return !existingProdctsKeys.includes(product.id) && 
                                            existingProdctsKeys.push(product.id) &&
                                            <BasketProductComponent
                                                key={product.id} 
                                                className={product.id} 
                                                title={product.title}
                                                image={product.image}
                                                price={product.price}
                                                count={product.rating.count}
                                                rate={product.rating.rate}
                                                basketData={basketData}
                                                setBasketData={setBasketData}
                                            />
                                })
                            }
                        </div>
                        <button onClick={openCloseModal} className="close-modal-button">Close</button>
                    </div>
                </div>
            )}
        </>        
    );
};

export default BusketModal;