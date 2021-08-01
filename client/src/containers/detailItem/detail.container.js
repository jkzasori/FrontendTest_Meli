import { useState, useEffect } from "react";
import { itemsServices } from "../../libs/services/";
import { ContainerBigCard, LoadingMeli, ProductDetail } from "../../components";

const DetailContainer = (props) => {
  const [idDetail] = useState(props.match.params.id || "");
  const [detailItem, setDetailItem] = useState({});

  useEffect(() => {
    if (idDetail) {
      itemsServices.specificItem(idDetail).then((res) => {
        if(res.status === 200) {
          setDetailItem(res.data.response)
        }
      });
    }
  }, [idDetail]);
  return (
    <div>
      <ContainerBigCard>
        {Object.keys(detailItem).length > 0 ? (
          <ProductDetail detailItem={detailItem} />
        ) : (
          <LoadingMeli />
        )}
      </ContainerBigCard>
    </div>
  );
};

export default DetailContainer;
