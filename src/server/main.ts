import * as express from 'express';
import * as path from 'path';
import { SERVER_PORT } from './config';
import {twitterApiRouter} from './routes/twitter-router';
import { Twitter } from 'twitter-node-client';
import { pagesRouter } from './routes/pages-router';
import { staticsRouter } from './routes/statics-router';
import {ACCESS_SECRET, ACCESS_TOKEN, CONSUMER_API_KEY, CONSUMER_SECRET} from './twitter-keys';

const app = express();
app.set('view engine', 'ejs');

const config = {
  consumerKey: CONSUMER_API_KEY,
  consumerSecret: CONSUMER_SECRET,
  accessToken: ACCESS_TOKEN,
  accessTokenSecret: ACCESS_SECRET,
  callBackUrl: 'www.google.com'
};
const twitter = new Twitter(config);

app.use('/assets', express.static(path.join(process.cwd(), 'assets')));
app.use(twitterApiRouter(twitter));
app.use(staticsRouter());
app.use(pagesRouter());

app.listen(SERVER_PORT, () => {
  console.log(`App listening on port ${SERVER_PORT}!`);
});
