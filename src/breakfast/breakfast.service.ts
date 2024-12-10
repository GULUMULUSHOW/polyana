import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class BreakfastService {
	constructor(private readonly prisma: PrismaService) {}

	async getBreakfasts() {
		return this.prisma.breakfast.findMany()
	}

	async getBreakfastById(id: string) {
		return this.prisma.breakfast.findUnique({
			where: {
				id: id,
			},
		})
	}

	async createBreakfast(data: any) {
		return this.prisma.breakfast.create({
			data,
		})
	}

	async updateBreakfast(id: string, data: any) {
		return this.prisma.breakfast.update({
			where: {
				id: id,
			},
			data,
		})
	}

	async deleteBreakfast(id: string) {
		return this.prisma.breakfast.delete({
			where: {
				id: id,
			},
		})
	}
}