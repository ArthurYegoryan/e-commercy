const ProductPriceRate = ({ price, rate }) => {
    return (
        <div className="product-price-count">
            <p className="product-price">{price}$</p>
            <p className="product-rate">{rate}/5</p>
        </div>
    );
};

export default ProductPriceRate;