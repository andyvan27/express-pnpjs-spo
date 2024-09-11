import * as dotenv from 'dotenv';
import express from 'express';
import usersRoutes from './routes/users.routes';
import libraryRoutes from './routes/library.routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/library', libraryRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Running on http://localhost:${process.env.PORT}`);
});