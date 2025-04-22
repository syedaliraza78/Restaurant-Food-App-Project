import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  createCheckoutSession,
  getOrders,
  stripeWebhook,
} from "../controller/ordre.controler.js";
const router: any = express.Router();

router.route("/").get(isAuthenticated, getOrders);
router
  .route("/checkout/create-checkout-session")
  .post(isAuthenticated, createCheckoutSession);
router
  .route("/webhook")
  .post(express.raw({ type: "application/json" }), stripeWebhook);

export default router;
