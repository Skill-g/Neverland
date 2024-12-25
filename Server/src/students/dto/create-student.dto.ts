import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({
    description: 'Full name of the student',
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    description: 'Date of birth',
    example: '2000-01-01',
  })
  @IsDateString()
  birthDate: string;

  @ApiProperty({
    description: 'Document number',
    example: '123456789',
  })
  @IsString()
  @IsNotEmpty()
  documentNumber: string;

  @ApiProperty({
    description: 'Individual Identification Number',
    example: '123456789012',
  })
  @IsString()
  @IsNotEmpty()
  iin: string;

  @ApiProperty({
    description: 'Phone number',
    example: '+7 777 123 45 67',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Home address',
    example: 'Street 123, City',
  })
  @IsString()
  @IsNotEmpty()
  homeAddress: string;

  @ApiProperty({
    description: 'Full name of parent',
    example: 'Jane Doe',
  })
  @IsString()
  @IsNotEmpty()
  parentFullName: string;

  @ApiProperty({
    description: 'Parent contact information',
    example: '+7 777 987 65 43',
  })
  @IsString()
  @IsNotEmpty()
  parentContacts: string;

  @ApiProperty({
    description: 'City of residence',
    example: 'Almaty',
  })
  @IsString()
  @IsNotEmpty()
  cityResidence: string;

  @ApiProperty({
    description: 'ID of the organization',
    example: 1,
  })
  @IsNumber()
  organizationId: number;
}
