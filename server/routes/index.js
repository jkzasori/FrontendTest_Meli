import { Router } from "express";
import items from "./items";

const router = Router();
router.use(items);
export default router;
