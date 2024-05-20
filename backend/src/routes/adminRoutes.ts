import { Router } from "express";
import {
  addGroceryItem,
  viewGroceryItem,
  updateGroceryItem,
  removeGroceryItem,
  updateInventory
} from "../controllers/adminController";

const router = Router();

router.post("/add", addGroceryItem);
router.get("/view", viewGroceryItem);
router.put("/update/:id", updateGroceryItem);
router.delete("/remove/:id", removeGroceryItem);
router.patch("/manage/:id", updateInventory);

export default router;
