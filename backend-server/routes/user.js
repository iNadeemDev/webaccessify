import express from "express";
import { signin, signup, userdata, configs, getConfigs } from "../controllers/user.js";

const router = express.Router();

router.post('/signin', signin);
router.post('/signup',signup);
router.get('/userdata', userdata);
router.put('/configs', configs);
router.get('/configs', getConfigs);

export default router;