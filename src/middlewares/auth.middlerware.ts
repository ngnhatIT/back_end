import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const secretCode = req.headers['x-secret-code'];
    const validSecretCode = 'UtdFGzmzFf6VL0Fg8wbH';
    const token = req.headers.authorization?.split(' ')[1];
    let decodedToken:string|jwt.JwtPayload = "";
    if (token) {
        try {
            decodedToken = jwt.verify(token, 'Tfa4oeLbCPfEEYpcPMZt');
        } catch (error) {
            res.status(401).send('Unauthorized');
        }
      }
    if (secretCode === validSecretCode) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }
}