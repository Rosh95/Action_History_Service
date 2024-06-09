import { Router } from 'express';
import { listActionHistories } from '../controllers/actionHistoryController';

const router = Router();

router.get('/action-history', listActionHistories);

export default router;
