const ProductImageArea = ({ image, className }) => {
    return (
        <div className="product-image-area">
            <img src={image} alt={`product-${className}`} className="product-image" />
        </div>
    );
};

export default ProductImageArea;