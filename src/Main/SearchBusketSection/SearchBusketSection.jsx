import SearchFormArea from "./SearchForm/SearchFormArea";
import "./SearchBusketSection.css";
import BusketModal from "./Busket/BusketModal";

const SearchBusketSection = ({ basketData, setBasketData }) => {
    return (
        <section className="search-busket-section">
            <SearchFormArea />
            <BusketModal basketData={basketData}
                         setBasketData={setBasketData} />
        </section>
    );
};

export default SearchBusketSection;