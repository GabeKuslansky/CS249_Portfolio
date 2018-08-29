import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('hello');
});

export const routing = router;