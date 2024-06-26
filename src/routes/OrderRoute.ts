import express from "express";
import stripePayment from "../controllers/orderController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import orderController from "../controllers/orderController";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, orderController.getMyOrders);

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  stripePayment.createCheckoutSession
);

router.post("/checkout/webhook", orderController.stripeWebhookHandler);

export default router;
