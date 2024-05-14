import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const secretCode = req.headers['x-secret-code'];
    const validSecretCode = 'UtdFGzmzFf6VL0Fg8wbH';

    if (secretCode === validSecretCode) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }
}