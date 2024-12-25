import { IsEmail, IsString, IsOptional, IsEnum } from 'class-validator';
import { Role } from '../enums/role.enum';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  name?: string;

@IsEnum(Role)
@IsOptional()
role?: Role = Role.USER;
}
