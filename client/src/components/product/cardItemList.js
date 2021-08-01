import {
  CardItemContainer,
  GroupBasicData,
  ContainerGroupText,
  ImgItem,
  Condition,
  HR,
} from "./styles/cardItemList.style";
import imgShipping from "../../assets/ic_shipping.png";
import { useHistory } from "react-router";
const CardItemList = (props) => {
  const history = useHistory();
  const { item } = props;

  const locationDetail = () => {
    history.push(`/items/${item?.id}`);
  };

  return (
    <>
      <CardItemContainer onClick={() => locationDetail()}>
        <GroupBasicData>
          <ImgItem src={item?.picture} alt={item.title} />
          <ContainerGroupText>
            <h2>
              {item?.price?.currency} {item?.price?.amount}{" "}
              {item?.free_shipping ? (
                <img src={imgShipping} alt="free shipping" />
              ) : (
                ""
              )}
            </h2>
            <h4>{item?.title}</h4>
          </ContainerGroupText>
        </GroupBasicData>

        <Condition>{item?.condition}</Condition>
      </CardItemContainer>
      <HR />
    </>
  );
};
export default CardItemList;
