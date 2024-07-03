import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from './Errors/AppError';
import catchAsync from '../utils/catchAsync';
import { TUSER_ROLE } from '../Modules/User/user.interface';

const auth = (...requiredRoles: TUSER_ROLE[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      next();
    } else {
      // Verify the token
      jwt.verify(
        token as string,
        config.JWT_SECRET as string,
        (err, decoded) => {
          if (err) {
            throw new AppError(
              httpStatus.UNAUTHORIZED,
              'Invalid token. Please log in again.',
            );
          }

          // const userRole = (decoded as JwtPayload).role;

          // if (requiredRoles.length > 0 && !requiredRoles.includes(userRole)) {
          //   throw new AppError(
          //     httpStatus.FORBIDDEN,
          //     'You do not have the necessary permissions to access this resource.',
          //   );
          // }

          // If token is valid and user has required role, attach user to request object
          req.user = decoded as JwtPayload;
          next();
        },
      );
    }
  });
};

export default auth;
