import {BreadCrumbContainer} from './styles/breadCrumbs.style'
const BreadCrumbsMeli = (props) => {
  const { categories } = props;
  return (
    <BreadCrumbContainer>
      {categories?.map((item) => (
        <span key={item?.id}>{item?.name}{" > "}</span>
      ))}
    </BreadCrumbContainer>
  );
};
export default BreadCrumbsMeli;