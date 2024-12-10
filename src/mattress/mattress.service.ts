import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class MattressService {
	constructor(
		private readonly prisma: PrismaService
	) {}

	async getAll() {
		return this.prisma.mattress.findMany()
	}

	async getById(id: string) {
		return this.prisma.mattress.findUnique({
			where: { id }
		})
	}

	async create(data: any) {
		return this.prisma.mattress.create({
			data
		})
	}

	async update(id: string, data: any) {
		return this.prisma.mattress.update({
			where: { id },
			data
		})
	}

	async delete(id: string) {
		return this.prisma.mattress.delete({
			where: { id }
		})
	}
}