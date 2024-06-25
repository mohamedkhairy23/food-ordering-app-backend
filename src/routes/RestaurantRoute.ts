import express from "express";
import { param } from "express-validator";
import restaurantController from "../controllers/restaurantController";

const router = express.Router();

// /api/restaurant/search/:city
router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("reataurant ID parameter must be avalid string"),
  restaurantController.getRestaurant
);
router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be avalid string"),
  restaurantController.searchRestaurants
);

export default router;
