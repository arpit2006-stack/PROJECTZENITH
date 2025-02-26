import express from 'express';
import { adminLogin ,addProducts } from '../controller/inventory.controller.js';
import { TokenGuard } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/logincheck",TokenGuard,adminLogin);

router.post("/additem",TokenGuard,addProducts);

export default router;