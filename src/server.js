import path from 'path';
import express from 'express';
import { Server } from 'http';
import exphbs from 'express-handlebars';
import { routing } from './modules';

const app = express();
const server = new Server(app);
app.use('/css', express.static('static/css'));


// Handlebars configuration
app.engine('.hbs', exphbs({
  extname: '.hbs', defaultLayout: 'default',
  helpers: {
    increment: (val) => parseInt(val) + 1
}}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(routing);

server.listen(8081);