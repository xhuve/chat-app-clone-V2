import express from 'express'
import { sendMessage } from '../controllers/messageControllers.js';
import { protectRoute } from './protectRoute.js';

const router = express.Router()

router.post('/send/:id', protectRoute, sendMessage)

export default router;
