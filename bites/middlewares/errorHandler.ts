import type { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/responses";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  return errorResponse(res, status, message);
}