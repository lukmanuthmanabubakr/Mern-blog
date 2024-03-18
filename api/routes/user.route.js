import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/test', test)

// module.exports = router;
export default router;