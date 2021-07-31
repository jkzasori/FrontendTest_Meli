import ic_Search from "../../assets/ic_Search.png";
import { ContainerInput } from "./style";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
const SearchBar = () => {
  const location = useLocation();
  const [input, setInput] = useState("");
  let history = useHistory();
  const locationSearch = () => {
    if (input) {
      history.push(`/items?search=${input}`);
    }
  };
  console.log(location);
  return (
    <ContainerInput>
      <input
        placeholder="Nunca dejes de buscar"
        value={input || ""}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => locationSearch()}>
        <img src={ic_Search} alt="searchMeliIcon" />
      </button>
    </ContainerInput>
  );
};
export default SearchBar;
