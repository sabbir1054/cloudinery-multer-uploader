import express, { NextFunction, Request, Response } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUpload';
import { UserController } from './users.controller';
import { UserValidation } from './users.validation';

const router = express.Router();

router.post(
  '/create-user',
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createUser.parse(JSON.parse(req.body.data));
    return UserController.createUser(req, res, next);
  }
);

export const UserRoutes = router;
