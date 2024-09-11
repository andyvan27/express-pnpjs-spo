import { Request, Response } from "express";
import { getItems, getItemsByCAML, getItemsByFilter } from "../services/library.service.js";

export async function handleGetItems(request: Request, response: Response) {
  response.send(await getItems());
}

export async function handleGetItemsByFilter(request: Request, response: Response) {
  response.send(await getItemsByFilter(request.params["filter"]));
}

export async function handleGetItemsByCAML(request: Request, response: Response) {
  response.send(await getItemsByCAML(request.params["filter"]));
}