import buscetImage from "../img/cart.webp";

const ProductCountBasket = ({ count, 
                              basketData, 
                              setBasketData, 
                              data, 
                              className
                            }) => {
                    
    return (
        <div className="product-count-basket">
            <p className="product-count">Count: {count}</p>
            <button onClick={() => {
                setBasketData(
                    ...basketData,
                    data.filter((product) => product.id === className)
                );
            }} className="basket-button">
                <img src={buscetImage} alt="basket" />
            </button>
        </div>
    );
};

export default ProductCountBasket;