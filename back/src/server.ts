import express from 'express';
import { moviesRoutes } from './routes/movies.routes';
import { usersRoutes } from './routes/users.routes';
import { authRoutes } from './routes/auth.routes';

const app = express();

app.use(express.json());

app.use('/movies', moviesRoutes);
app.use('/users', usersRoutes);
app.use('/login', authRoutes);

app.listen(3333);
