const ProductDetail = (props) => {
  const {detailItem} = props;
  console.log(detailItem)
  return (
    <div>
      <div>
        <div><img src={detailItem?.picture} alt={detailItem?.item?.title} /></div>
        <div>{detailItem?.description} Text</div>
      </div>
      <div>
        <div>Nuevo</div>
        <div>{detailItem?.item?.title}</div>
        <div>{detailItem?.item?.price?.amount}</div>
      </div>
    </div>
  );
};
export default ProductDetail;
