import ProductCountBasket from "./ProductCountBasket";
import ProductPriceRate from "./ProductPriceRate";
import ProductTitleArea from "./ProductTitleArea";

const ProductInfo = ({ title, 
                       price,
                       rate,
                       count,
                       basketData,
                       setBasketData,
                       data,
                       className
                    }) => {

    return (
        <div className="product-info">
            <ProductTitleArea title={title} />
            <ProductPriceRate price={price} rate={rate} />
            <ProductCountBasket count={count}
                                basketData={basketData}
                                setBasketData={setBasketData}
                                data={data}
                                className={className} />
        </div>
    );
};

export default ProductInfo;