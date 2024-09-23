import express from "express"
import { protectRoute } from "./protectRoute.js"
import { getSidebarUsers } from "../controllers/userController.js"

const router = express.Router()

router.get("/", protectRoute, getSidebarUsers)


export default router