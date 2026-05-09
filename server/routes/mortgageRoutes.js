import express from 'express';
import { verifyToken } from '../middleware/verifyUser.js';
import { createMortgagePlan, getMortgagePlans, deleteMortgagePlan, updateMortgagePlan } from '../controllers/mortgageController.js';

const router = express.Router();

router.post('/create', verifyToken, createMortgagePlan);
router.get('/getplans', verifyToken, getMortgagePlans);
router.delete('/deleteplan/:planId', verifyToken, deleteMortgagePlan);
router.put('/updateplan/:planId', verifyToken, updateMortgagePlan);

export default router;
