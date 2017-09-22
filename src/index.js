import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import schema from './schema';

const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
})