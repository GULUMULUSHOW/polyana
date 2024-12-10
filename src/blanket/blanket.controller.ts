import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common'
import { BlanketService } from './blanket.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

@Controller('blanket')
export class BlanketController {
	constructor(private readonly blanketService: BlanketService) {}

	@Get()
	@ApiOperation({ summary: 'Get all blankets' })
	@ApiResponse({
		status: 200,
		description: 'Return all blankets'
	})
	getBlankets() {
		return this.blanketService.getAll()
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get blanket by id' })
	@ApiResponse({
		status: 200,
		description: 'Return blanket by id'
	})
	getBlanket(@Param('id') id: string) {
		return this.blanketService.getById(id)
	}

	@Post()
	@ApiOperation({ summary: 'Create blanket' })
	@ApiResponse({
		status: 201,
		description: 'Return created blanket'
	})
	createBlanket(@Body() data: any) {
		return this.blanketService.create(data)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update blanket' })
	@ApiResponse({
		status: 200,
		description: 'Return updated blanket'
	})
	updateBlanket(@Param('id') id: string, @Body() data: any) {
		return this.blanketService.update(id, data)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete blanket' })
	@ApiResponse({
		status: 200,
		description: 'Return deleted blanket'
	})
	deleteBlanket(@Param('id') id: string) {
		return this.blanketService.delete(id)
	}
}