import { Router } from 'express';
import {
    save,
    getAll,
    getById,
    updateById,
    deleteById
} from '../controllers/bookController';

const router = Router();

router.post('/books', save);
router.get('/books', getAll);
router.get('/books/:id', getById);
router.put('/books/:id', updateById);
router.delete('/books/:id', deleteById);

export default router;
