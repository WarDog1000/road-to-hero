import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateQueryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const ageNumber = parseInt(value.age.toString(), 10)
 
    if(isNaN(ageNumber)){ // hello => NaN
      throw new HttpException('age must be a number', HttpStatus.BAD_REQUEST)
    }

    return {...value, age: ageNumber};
  }
}
