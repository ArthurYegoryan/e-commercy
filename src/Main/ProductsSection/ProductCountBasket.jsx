import buscetImage from "../img/cart.webp";

const ProductCountBasket = ({ count }) => {
    return (
        <div className="product-count-basket">
            <p className="product-count">Count: {count}</p>
            <button className="basket-button">
                <img src={buscetImage} alt="basket" />
            </button>
        </div>
    );
};

export default ProductCountBasket;