import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, LoginUserDto, CreateUserDto } from './dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData } = createUserDto;

      const user = this.userRepository.create({
        ...userData,
        password: await bcrypt.hashSync(password, 10),
      });

      await this.userRepository.save(user);

      return {
        ...user,
        token: this.getJwtToken({ 
          // email: user.email,
          id: user.id, 
        }),
        password: undefined,
      }
    } catch (error) {
      return error;
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const { email, password } = loginUserDto;

      const user = await this.userRepository.findOne({ 
        where: { email },
        select: ['email', 'password', 'id'],
       });

       if (!user){
          throw new UnauthorizedException('Invalid imail');
       }

        const isPasswordValid = await bcrypt.compareSync(password, user.password);

        if (!isPasswordValid){
          throw new UnauthorizedException('Invalid password');
        }

        return {
          ...user,
          token: this.getJwtToken({ 
            // email: user.email,
            id: user.id,
          }),
          password: undefined,
        }

    } catch (error) {

      return error;
      
    }
  }

  private getJwtToken(payload: JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }

  findAll() {
    return 'veremos'
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async ram(email, password) {
    try {
      const API_URL = 'https://school-dev-6d242b4deb31.herokuapp.com/api/auth/login';
      const response = await axios.post(API_URL, {
        email: email,
        password: password,
      });
      console.log('Usuario Conectado');
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw new Error('No se pudo conectar al servidor');
    }
  }

    
    // return Conex;
  }

