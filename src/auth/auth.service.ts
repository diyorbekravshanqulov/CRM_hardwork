import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { Users } from "../users/model/user.model";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async singUp(createUserDto: CreateUserDto) {
    const condidate = await this.userService.getUserByEmail(
      createUserDto.email
    );
    if (condidate) {
      throw new HttpException(
        "This user already exist",
        HttpStatus.BAD_REQUEST
      );
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    createUserDto.password = hashedPassword;

    const newUser = await this.userService.create(createUserDto);
    return this.genarateToken(newUser);
  }

  private async genarateToken(user: Users) {
    const payload = { sub: user.id, email: user.email, roles: user.roles };

    return { token: this.jwtService.sign(payload) };
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.getUserByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException("wrong email or passowrd");
    }

    const validPassword = await bcrypt.compare(
      loginDto.password,
      user.password
    );

    if (!validPassword) {
      throw new UnauthorizedException("wrong email or password");
    }
    return this.genarateToken(user);
  }
}
