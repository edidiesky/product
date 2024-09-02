import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication.js";

import {
  GetAllProduct,
  CreateProducts,
  GetSingleProduct,
  DeleteProduct,
  GetAllAdminProducts,
  UpdateProduct,
} from "../controllers/productControllers.js";

router
  .route("/")
  .get(GetAllProduct)
  .post(authMiddleware, adminMiddleware, CreateProducts);
router
  .route("/admin")
  .get(authMiddleware, adminMiddleware, GetAllAdminProducts);

router
  .route("/:id")
  .get(GetSingleProduct)
  .delete(authMiddleware, adminMiddleware, DeleteProduct)
  .put(authMiddleware, adminMiddleware, UpdateProduct);

export default router;
