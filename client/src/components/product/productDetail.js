import {
  ContainerProductDetail,
  Description,
  PaymentZone,
} from "./styles/productDetail.style";
const ProductDetail = (props) => {
  const { detailItem } = props;
  console.log(detailItem);
  return (
    <ContainerProductDetail>
      <Description>
        <div className="imgContainer">
          <img src={detailItem?.picture} alt={detailItem?.item?.title} />
        </div>
        <div className="textDescription">
          <h2>Decipción del producto</h2>
          <p>{detailItem?.description}</p>
        </div>
      </Description>
      <PaymentZone>
        <h6>
          {detailItem?.condition === "new" ? "Nuevo" : detailItem?.condition} -
          {detailItem?.sold_quantity
            ? detailItem?.sold_quantity + " vendidos"
            : ""}
        </h6>
        <h4>{detailItem?.item?.title}</h4>
        <h2>
          ${" "}
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: detailItem?.item?.price?.currency,
          }).format(detailItem?.item?.price?.amount)}
        </h2>
        <button>Comprar</button>
      </PaymentZone>
    </ContainerProductDetail>
  );
};
export default ProductDetail;
