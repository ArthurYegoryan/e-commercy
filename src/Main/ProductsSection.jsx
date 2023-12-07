import GetProducts from "../services/GetProducts.jsx";

const ProoductsSection = () => {
    const products = GetProducts();

    return (
        <section>
            {/* Barlus Hayer */}
        </section>
    );
};

export default ProoductsSection;

// {products.map(product => <p>{product.title}</p>)}