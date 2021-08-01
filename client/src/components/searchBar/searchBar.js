import ic_Search from "../../assets/ic_Search.png";
import { ContainerInput } from "./style";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
const SearchBar = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery().get("search");
  const [input, setInput] = useState(query || "");
  let history = useHistory();
  const locationSearch = () => {
    if (input) {
      history.push(`/items?search=${input}`);
    }
  };
  const handleKeyDown = (item) => {
    if (item.key === "Enter") {
      locationSearch();
    }
  };
  return (
    <ContainerInput>
      <input
        placeholder="Nunca dejes de buscar"
        value={input || ""}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={() => locationSearch()}>
        <img src={ic_Search} alt="searchMeliIcon" />
      </button>
    </ContainerInput>
  );
};
export default SearchBar;
