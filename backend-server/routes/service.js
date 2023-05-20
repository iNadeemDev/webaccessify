import express from "express";
import {getConfigs, getScript} from "../controllers/service.js";

const service = express.Router();

service.get('/script.js', getScript);
service.get('/configs', getConfigs);

export default service;