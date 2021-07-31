import HeaderLogo from "./headerLogo";
import { WrapperContainer } from "./styles/wrapper.style";
const Wrapper = (props) => {
  const { children } = props;
  return (
    <WrapperContainer>
      <HeaderLogo />
      <div className="wrapperBody">{children}</div>
    </WrapperContainer>
  );
};

export default Wrapper;
