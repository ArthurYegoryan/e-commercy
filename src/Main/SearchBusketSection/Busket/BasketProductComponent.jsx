import "./BasketProductComponent.css";

const BasketProductComponent = ({
    className,
    title,
    image,
    price,
    count,
    rate
}) => {
    return (
        <div className="basket-product-interface">
            <div className="basket-image-area">
                <img src={image} alt={`product-${className}`} className="basket-product-image" />
            </div>
            <div className="basket-product-info">
                <div className="basket-product-title">{title}</div>
                <div className="basket-product-rate-price-count">
                    <p className="basket-product-rate">{rate}/5</p>
                    <p className="basket-product-price">{price}$</p>
                    <p className="basket-product-count">Count: {count}</p>
                </div>
                <div className="basket-select-count-buy">
                    <div className="basket-select-count">
                        <label htmlFor="count">Count: </label>
                        <input type="number" 
                               max={count}
                               id="count"
                               className="basket-input-count"
                               placeholder="1"
                               min={1} />
                    </div>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default BasketProductComponent;