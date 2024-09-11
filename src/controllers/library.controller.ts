import { Request, Response } from "express";
import { getItems } from "../services/library.service";

export async function handleGetItems(request: Request, response: Response) {
  response.send(await getItems());
}