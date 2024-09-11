import { Request, Response } from "express";
import { User } from "../dtos/User";
import { createUser } from "../services/users.service.js";

export function handleGetUsers(request: Request, response: Response) {
  response.send([]);
}

export function handleGetUserById(request: Request, response: Response) {
  response.send({});
}

export function handleCreateUser(  
  request: Request<{},{}, User>, 
  response: Response) {
  const user: User = createUser(request.body); 
  return response.status(201).send(user);
}