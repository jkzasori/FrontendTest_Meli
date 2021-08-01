import { useEffect, useState } from "react";
import { itemsServices } from "../../libs/services/";
import { useLocation } from "react-router-dom";
import { CardItemList, ContainerBigCard, LoadingMeli } from "../../components";
const ResultsSearchContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery().get("search");

  useEffect(() => {
    setLoading(true);
    itemsServices.itemSearch(query).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        if (!res.data.error) {
          setItems(res?.data?.response.items);
        }
      }
    });
  }, [query]);
  const listItems = (list) => {
    return list?.map((item) => <CardItemList key={item?.id} item={item} />);
  };

  return (
    <>
      {loading ? (
        <LoadingMeli />
      ) : items?.length > 0 ? (
        <ContainerBigCard>{listItems(items)}</ContainerBigCard>
      ) : (
        <h6>Nunca pare de buscar</h6>
      )}
    </>
  );
};

export default ResultsSearchContainer;
