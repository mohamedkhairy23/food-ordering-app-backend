import express from "express";
import stripePayment from "../controllers/orderController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router();

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  stripePayment.createCheckoutSession
);

export default router;
