import { useState, useEffect } from "react";
import { itemsServices } from "../../libs/services/";
import {
  ContainerBigCard,
  LoadingMeli,
  ProductDetail,
  BreadCrumbsMeli,
} from "../../components";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mercado Libre: Encuentre lo que desea</title>
        <meta
          name="description"
          content="Compra en Mercado Libre - Pagá en cuotas - Envíos a todo el país."
        />
      </Helmet>
      {Object.keys(detailItem).length > 0 ? (
        <>
          <Helmet>
            <title>Mercado Libre: {detailItem?.title}</title>
          </Helmet>
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
