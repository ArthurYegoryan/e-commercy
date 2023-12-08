import ProductImageArea from "./ProductImageArea";
import ProductInfo from "./ProductInfo";

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
            <ProductImageArea image={image} 
                              className={className} />           
            <ProductInfo title={title}
                         price={price}
                         rate={rate}
                         count={count} />
        </div>
    );
};

export default ProductComponent;