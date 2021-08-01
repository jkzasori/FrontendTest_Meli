import axios from "axios";
import { Router } from "express";
import { meliItemsServices } from "../externalServices";
import { formatItemsData, formatDetailData } from "../utils/formatData";
import { author } from "../utils/defaultData";

const router = Router();

router.get("/items", async (req, res) => {
  try {
    var responseExternal = await meliItemsServices
      .itemSearch(req.query.q)
      .then((res) => {
        return res;
      });

    let data = formatItemsData(responseExternal.data, 4);


    res.status(200).json({
      response: {
        author,
        categories: data.categories,
        items: data.items,
        breadCrumbs: data.breadCrumb,
        // categories: categoriesT2,
        // breadCrumb,
      },
      message: "Success! all it's working",
      error: false,
    });
  } catch (error) {
    res.status(404).json({ message: "Can't get items", error: true });
  }
});

router.get("/items/:id", async (req, res) => {
  try {
    const specificItem = await meliItemsServices
      .specificItem(req.params.id)
      .then((res) => {
        return res;
      });
      
    const itemDescription = await meliItemsServices
      .itemDescription(req.params.id)
      .then((res) => res);
    let data = formatDetailData(specificItem.data, itemDescription.data);
    const categories = await meliItemsServices
      .category(data.categoryId)
      .then((res) => {
        return res;
      });
    res.status(200).json({
      response: {
        author,
        item: data.item,
        picture: data.picture,
        condition: data.condition,
        free_shipping: data.free_shipping,
        sold_quantity: data.sold_quantity,
        description: data.description,
        categories: categories.data.path_from_root
      },
      message: "Success! all it's working",
      error: false,
    });
  } catch (error) {
    res.status(404).json({
      message: "Can't get specific item " + req.params.id,
      error: true,
    });
  }
});

export default router;
