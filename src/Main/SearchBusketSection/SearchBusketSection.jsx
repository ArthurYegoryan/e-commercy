import BusketButton from "./Busket/BusketButton";
import SearchFormArea from "./SearchForm/SearchFormArea";
import "./SearchBusketSection.css";

const SearchBusketSection = () => {
    return (
        <section className="search-busket-section">
            <SearchFormArea />
            <BusketButton />
        </section>
    );
};

export default SearchBusketSection;