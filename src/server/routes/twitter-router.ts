import * as bodyParser from 'body-parser';
import { Router } from 'express';
import {mapFollowers} from '../mappers/followers.mapper';
import {mapUser} from '../mappers/user.mapper';

export function twitterApiRouter(twitter) {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/api/followers/:userScreenName', async (req, res) => {
    const userScreenName = req.params.userScreenName;
    const cursor = req.query.cursor || -1;
    twitter.getFollowersList({screen_name: userScreenName, count: 30, skip_status: true, cursor},
        e => {
        console.error(e);
        res.status(e.status);
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

  router.get('/api/user/:userScreenName', async (req, res) => {
    const userScreenName = req.params.userScreenName;
    twitter.getUser({screen_name: userScreenName}, e => {
      console.error(e);
      res.status(500);
      res.send('User not exists');
    },
      response => {
        const parsedResponse = JSON.parse(response);
        res.json(mapUser(parsedResponse));
      });
  });

  return router;
}
