import { Router } from "express";
import { bookGroceryItems, viewGroceryItem } from "../controllers/userController";

const router = Router();

router.get('/view',viewGroceryItem);
router.post('/book',bookGroceryItems);

export default router;