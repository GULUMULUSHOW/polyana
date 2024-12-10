import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class BlanketService {
	constructor(private readonly prisma: PrismaService) {}

	async getAll() {
		return this.prisma.blanket.findMany()
	}

	async getById(id: string) {
		return this.prisma.blanket.findUnique({
			where: { id }
		})
	}

	async create(data: any) {
		return this.prisma.blanket.create({ data })
	}

	async update(id: string, data: any) {
		return this.prisma.blanket.update({
			where: { id },
			data
		})
	}

	async delete(id: string) {
		return this.prisma.blanket.delete({
			where: { id }
		})
	}
}