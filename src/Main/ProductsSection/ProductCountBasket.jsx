import buscetImage from "../img/cart.webp";

const ProductCountBasket = ({ count, 
                              basketData, 
                              setBasketData, 
                              data, 
                              className,
                              isBasketEmpty,
                              setIsBasketEmpty
                            }) => {
                    
    return (
        <div className="product-count-basket">
            <p className="product-count">Count: {count}</p>
            <button onClick={() => {
                isBasketEmpty && setBasketData(
                    ...basketData,
                    data.filter((product) => product.id === className)
                );
                !isBasketEmpty && setBasketData(
                    basketData.push(data.filter((product) => product.id === className))
                );
                setIsBasketEmpty(false);
            }} className="basket-button">
                <img src={buscetImage} alt="basket" />
            </button>
        </div>
    );
};

export default ProductCountBasket;