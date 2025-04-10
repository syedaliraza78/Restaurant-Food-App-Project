import express from "express";
import upload from "../middleware/multer.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { addMenu, editMenu } from "../controller/menu.controler.js";

const router: any = express.Router();

router.route("/").post(isAuthenticated, upload.single("image"), addMenu);
router.route("/:id").put(isAuthenticated, upload.single("image"), editMenu);

export default router;
