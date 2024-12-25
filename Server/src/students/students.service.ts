import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = await this.prisma.student.create({
      data: {
        ...createStudentDto,
        birthDate: new Date(createStudentDto.birthDate),
      },
    });

    await this.prisma.organization.update({
      where: { id: createStudentDto.organizationId },
      data: {
        studentCount: {
          increment: 1,
        },
      },
    });

    return student;
  }

  findAll() {
    return this.prisma.student.findMany({
      include: {
        organization: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.student.findUnique({
      where: { id },
      include: {
        organization: true,
      },
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const data: any = { ...updateStudentDto };
    if (updateStudentDto.birthDate) {
      data.birthDate = new Date(updateStudentDto.birthDate);
    }

    return this.prisma.student.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const student = await this.prisma.student.findUnique({
      where: { id },
    });

    await this.prisma.organization.update({
      where: { id: student.organizationId },
      data: {
        studentCount: {
          decrement: 1,
        },
      },
    });

    return this.prisma.student.delete({
      where: { id },
    });
  }
}
