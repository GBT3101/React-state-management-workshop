import * as bodyParser from 'body-parser';
import { Router } from 'express';
import {mapFollowers} from '../mappers/followers.mapper';
import {mapUser} from '../mappers/user.mapper';

export function twitterApiRouter(twitter) {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/api/followers/:userId', async (req, res) => {
    const userId = req.params.userId;
    const cursor = req.query.cursor || -1;
    twitter.getFollowersList({screen_name: userId, count: 30, skip_status: true, cursor},
        e => {
        console.error(e);
        res.send('Something went wrong');
      },
        response => {
          const parsedResponse = JSON.parse(response);
          res.json({
            followers: mapFollowers(parsedResponse.users),
            nextCursor: parsedResponse.next_cursor,
          });
        });
  });

  router.get('/api/user/:userId', async (req, res) => {
    const userId = req.params.userId;
    twitter.getUser({screen_name: userId}, e => {
      console.error(e);
      res.send('User not exists');
    },
      response => {
        const parsedResponse = JSON.parse(response);
        res.json(mapUser(parsedResponse));
      });
  });

  return router;
}
