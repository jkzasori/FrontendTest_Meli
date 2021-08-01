import { useState, useEffect } from "react";
import { itemsServices } from "../../libs/services/";
import {
  ContainerBigCard,
  LoadingMeli,
  ProductDetail,
  BreadCrumbsMeli,
} from "../../components";

const DetailContainer = (props) => {
  const [idDetail] = useState(props.match.params.id || "");
  const [detailItem, setDetailItem] = useState({});

  useEffect(() => {
    if (idDetail) {
      itemsServices.specificItem(idDetail).then((res) => {
        if (res.status === 200) {
          setDetailItem(res.data.response);
        }
      });
    }
  }, [idDetail]);
  return (
    <div>
      {Object.keys(detailItem).length > 0 ? (
        <>
          {" "}
          <BreadCrumbsMeli categories={detailItem?.categories} />
          <ContainerBigCard>
            <ProductDetail detailItem={detailItem} />
          </ContainerBigCard>
        </>
      ) : (
        <LoadingMeli />
      )}
    </div>
  );
};

export default DetailContainer;
