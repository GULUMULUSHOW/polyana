import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common'
import { BreakfastService } from './breakfast.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

@Controller('breakfast')
export class BreakfastController {
	constructor(private readonly breakfastService: BreakfastService) {}

	@Get()
	@ApiOperation({ summary: 'Get all breakfasts' })
	@ApiResponse({
		status: 200,
		description: 'Return all breakfasts'
	})
	getBreakfasts() {
		return this.breakfastService.getBreakfasts()
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get breakfast by id' })
	@ApiResponse({
		status: 200,
		description: 'Return breakfast by id'
	})
	getBreakfastById(id: string) {
		return this.breakfastService.getBreakfastById(id)
	}

	@Post()
	@ApiOperation({ summary: 'Create breakfast' })
	@ApiResponse({
		status: 201,
		description: 'Return created breakfast'
	})
	createBreakfast(@Body() data: any) {
		return this.breakfastService.createBreakfast(data)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update breakfast' })
	@ApiResponse({
		status: 200,
		description: 'Return updated breakfast'
	})
	updateBreakfast(@Body() data: any, @Param('id') id: string) {
		return this.breakfastService.updateBreakfast(id, data)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete breakfast' })
	@ApiResponse({
		status: 200,
		description: 'Return deleted breakfast'
	})
	deleteBreakfast(@Param('id') id: string) {
		return this.breakfastService.deleteBreakfast(id)
	}
}