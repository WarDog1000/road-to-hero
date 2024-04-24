import { IsEmail, IsString, IsNumber, IsNotEmpty, Max } from 'class-validator'

export class CreateUserDto {

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsString()
  @IsNotEmpty()
  username: string

  // @IsNumber()
  // @Max(100)
  // age: number
}