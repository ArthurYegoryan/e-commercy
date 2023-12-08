import GetProducts from "../services/GetProducts.jsx";

const ProoductsSection = () => {
    const products = GetProducts();

    setTimeout(() => {
        return (
            <section>
                {products.map((product) => <p key={product.id}>{product.title}</p>)}
            </section>
        );
    }, 1000);
};

export default ProoductsSection;

// {products.map(product => <p>{product.title}</p>)}