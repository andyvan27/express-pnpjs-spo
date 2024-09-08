import { Request, Response } from "express";
import { User } from "../dtos/User";

export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export function getUserById(request: Request, response: Response) {
  response.send({});
}

export function createUser(request: Request<{}, User, User>, response: Response<User>) {
  //const user: User = request.body.;
  console.log(request.body.email);
  // user.id = 100;
  // user.password = "*******";
  return response.status(201).send(request.body);
}