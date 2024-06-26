import express from "express";
import myRestaurantController from "../controllers/myRestaurantController";
import multer from "multer";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5mb
  },
});

// GET /api/my/restaurant/order
router.get(
  "/order",
  jwtCheck,
  jwtParse,
  myRestaurantController.getMyRestaurantOrders
);

// GET /api/my/restaurant
router.get("/", jwtCheck, jwtParse, myRestaurantController.getMyRestaurant);

// POST /api/my/restaurant
router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  myRestaurantController.createMyRestaurant
);

// PUT /api/my/restaurant
router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  myRestaurantController.updateMyRestaurant
);

export default router;
