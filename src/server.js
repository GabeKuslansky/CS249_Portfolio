import path from 'path';
import express from 'express';
import { Server } from 'http';
import exphbs from 'express-handlebars';
import { routing } from './modules';

const app = express();

const server = new Server(app);

app.use(routing);
app.use('/static', express.static('static'));

// Handlebars configuration
app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'default'}));
app.set('view engine', '.hbs');
app.set('views', path.join('./views'));

server.listen(8081);