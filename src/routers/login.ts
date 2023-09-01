import { Router } from 'express';

const router = Router();

router.post('/login', (_, res) => res.status(200).send({ logged: true }));

export default router;