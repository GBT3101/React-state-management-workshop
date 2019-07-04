import * as bodyParser from 'body-parser';
import { Router } from 'express';

export function apiRouter() {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/api/user/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`hi ${userId}`);
  });

  return router;
}
