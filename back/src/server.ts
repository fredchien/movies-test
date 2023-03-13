import express from 'express';
const cors = require("cors");
const http = require("http");

import {checkToken } from './middleware';
import { moviesRoutes } from './routes/movies.routes';
import { usersRoutes } from './routes/users.routes';
import { authRoutes } from './routes/auth.routes';

const app = express();
const server = http.Server(app);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
});

app.use(cors());
app.use(express.json());

app.use('/movies',checkToken, moviesRoutes);
app.use('/users',checkToken, usersRoutes);
app.use('/login', authRoutes);

server.listen(process.env.PORT || 3333);
