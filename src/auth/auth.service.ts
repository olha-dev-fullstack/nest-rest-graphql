import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  public getTokenForUser(user: User): string {
    return this.jwtService.sign({
      usename: user.username,
      sub: user.id,
    });
  }

  public async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}
