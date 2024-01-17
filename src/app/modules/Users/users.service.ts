import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUpload';
import { IUploadFile } from '../../../interfaces/file';
import prisma from '../../../shared/prisma';

const createUser = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  if (uploadedImage) {
    req.body.photo = uploadedImage.secure_url;
  }
  const result = await prisma.user.create({
    data: {
      userName: req.body.userName,
      email: req.body.email,
      photo: req.body.photo,
    },
  });
  return result;
};

export const UserService = {
  createUser,
};
