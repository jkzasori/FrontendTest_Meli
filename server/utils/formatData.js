const basicItemData = (itemData) => {
  return {
    id: itemData.id,
    title: itemData.title,
    price: {
      currency: itemData.currency_id,
      amount: Math.trunc(itemData.price),
      decimals: +(
        Math.abs(itemData.price) - Math.floor(Math.abs(itemData.price))
      ).toFixed(2),
    },
  };
};

const getCategories = (data) => {
  return data.available_filters[0].values.map((item) => item.name);
};

const getBreadCrumbElements = (data) => {
  return data.available_filters.map((items) => {
    return items.values.find(
      (v) => v.results === Math.max(...items.values.map((item) => item.results))
    );
  });
};

export const formatItemsData = (totalData, elementsItem) => {
  let listItem = totalData.results.map((item) => {
    let data = basicItemData(item);
    return {
      id: data.id,
      title: data.title,
      price: data.price,
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    };
  });
  return {
    items: elementsItem ? listItem.slice(0, elementsItem) : listItem,
    categories: getCategories(totalData),
    breadCrumb: getBreadCrumbElements(totalData),
  };
};

export const formatDetailData = (specificItem, itemDescription) => {
  let data = basicItemData(specificItem);
  return {
    item: { id: data.id, title: data.title, price: data.price },
    picture: specificItem.pictures[0].url,
    condition: specificItem.condition,
    free_shipping: specificItem.shipping.free_shipping,
    sold_quantity: specificItem.sold_quantity,
    description: itemDescription.plain_text,
  };
};
