import { HeaderLogoContainer } from "./styles/headerLogo.style";
import logo from "../../assets/Logo_ML.png";
import { SearchBar } from "../";
import { Link } from "react-router-dom";

const HeaderLogo = (props) => {
  const { children } = props;
  return (
    <>
      <HeaderLogoContainer>
        <div>
          <Link to="/">
            <img src={logo} alt="mercado libre" />
          </Link>

          <SearchBar></SearchBar>
        </div>
      </HeaderLogoContainer>
      {children}
    </>
  );
};
export default HeaderLogo;
