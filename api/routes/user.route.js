import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/test', test)
router.put('/update:userId', updateUser);

// module.exports = router;
export default router;