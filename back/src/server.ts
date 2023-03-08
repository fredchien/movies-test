import express from 'express';
import { moviesRoutes } from './routes/movies.routes';
import { usersRoutes } from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/movies', moviesRoutes);
app.use('/users', usersRoutes);

app.listen(3333);
