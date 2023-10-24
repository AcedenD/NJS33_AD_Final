import { Request } from "express";

export function returnMessage(message: string, status?: number, data?: any) {
  return {
    status,
    message,
    data
  }
}

export function getDataFromToken(req: Request) {
  const token = req.user;
  const data = Object.entries(token)[0][1];

  return data;
}