import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BioService } from '../services/BioService';

const update = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const updatedBio = await BioService.update(req.params.userId, req.body);
    return res.status(StatusCodes.OK).json(updatedBio);
  } catch (error) {
    next(error);
  }
};

export default { update };
