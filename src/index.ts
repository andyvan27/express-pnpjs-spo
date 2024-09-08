import express, { NextFunction, Request, Response } from 'express';
import usersRouters from './routes/users';

const app = express();

app.use('/api/v1/users', usersRouters);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});