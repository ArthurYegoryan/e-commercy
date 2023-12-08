import "./SearchForm.css";
import ButtonComponent from "../../../Buttons/ButtonComponent";

const SearchFormArea = () => {
    return (
        <div className="search-name-area">
            <form action="" className="search-form">
                <input type="text" placeholder="What do you want to find?" className="search-text" />
                <ButtonComponent label="Search" className={"search-button"} />
            </form>
        </div>
    );
};

export default SearchFormArea;