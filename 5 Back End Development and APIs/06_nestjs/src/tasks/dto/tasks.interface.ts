import { IsString, IsBoolean, MinLength, MaxLength } from 'class-validator'

export class CreateTaskDTO {

  @IsString()
  @MinLength(1)
  title: string

  @MinLength(1)
  @MaxLength(10)
  @IsString()
  description: string

  @IsBoolean()
  status: boolean
}