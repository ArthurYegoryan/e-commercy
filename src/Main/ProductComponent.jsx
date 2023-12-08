import buscetImage from "./img/cart.webp";

const ProductComponent = ({
    className,
    title,
    image,
    price,
    count,
    rate
}) => {
    return (
        <div className={`product product-${className}`}>
            <div className="product-image-area">
                <img src={image} alt={`product-${className}`} className="product-image" />
            </div>            
            <div className="product-info">
                <div className="product-title-area">
                    <p className="product-title">{title}</p>
                </div>
                <div className="product-price-count">
                    <p className="product-price">{price}$</p>
                    <p className="product-rate">{rate}/5</p>
                </div>
                <div className="product-count-basket">
                    <p className="product-count">Count: {count}</p>
                    <button className="basket-button">
                        <img src={buscetImage} alt="basket" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;