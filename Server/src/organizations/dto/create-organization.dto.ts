import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizationDto {
  @ApiProperty({
    description: 'The name of the organization',
    example: 'School №1',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
