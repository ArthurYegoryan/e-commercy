import ProductCountBasket from "./ProductCountBasket";
import ProductPriceRate from "./ProductPriceRate";
import ProductTitleArea from "./ProductTitleArea";

const ProductInfo = ({ title, 
                       price,
                       rate,
                       count 
                    }) => {
    return (
        <div className="product-info">
            <ProductTitleArea title={title} />
            <ProductPriceRate price={price} rate={rate} />
            <ProductCountBasket count={count} />
        </div>
    );
};

export default ProductInfo;