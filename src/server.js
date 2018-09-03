import config from 'config';
import express from 'express';
import { Server } from 'http';
import { routing } from './modules/routing'

const app = express();

const server = new Server(app);

app.use(routing);

const port = process.env.PORT || config.get('port');
server.listen(port, () => {
  console.log(`CS249 Portfolio running on port ${port}, press ^C to exit.`);
});