import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../services/UserService';

const create = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<Response> => {
  const createdUser = await UserService.create(req.body);
  return res.status(StatusCodes.CREATED).json(createdUser);
};

const index = async (
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<Response> => {
  const users = await UserService.index();
  return res.status(StatusCodes.OK).json(users);
};

export default { index, create };
