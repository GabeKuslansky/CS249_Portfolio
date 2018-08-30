import express from 'express';
import { Server } from 'http';
import { routing } from './modules/routing'

const app = express();

const server = new Server(app);

app.use(routing);

server.listen(8081)