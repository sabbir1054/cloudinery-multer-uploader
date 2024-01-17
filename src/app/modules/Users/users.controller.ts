import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './users.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createUser(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User create with photo upload ',
    data: result,
  });
});

export const UserController = {
  createUser,
};
