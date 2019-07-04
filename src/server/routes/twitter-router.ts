import * as bodyParser from 'body-parser';
import { Router } from 'express';

export function twitterApiRouter(twitter) {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/api/followers/:userId', async (req, res) => {
    const userId = req.params.userId;
    twitter.getFollowersList({screen_name: userId},
        e => {
        console.error(e);
        res.send('Something went wrong');
      },
        response => res.json(response));
  });

  return router;
}
