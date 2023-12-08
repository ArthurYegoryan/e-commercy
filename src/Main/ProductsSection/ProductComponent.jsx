import ProductImageArea from "./ProductImageArea";
import ProductInfo from "./ProductInfo";

const ProductComponent = ({
    className,
    title,
    image,
    price,
    count,
    rate,
    basketData,
    setBasketData,
    data
}) => {
    return (
        <div className={`product product-${className}`}>
            <ProductImageArea image={image} 
                              className={className} />           
            <ProductInfo title={title}
                         price={price}
                         rate={rate}
                         count={count}
                         basketData={basketData}
                         setBasketData={setBasketData}
                         data={data}
                         className={className} />
        </div>
    );
};

export default ProductComponent;