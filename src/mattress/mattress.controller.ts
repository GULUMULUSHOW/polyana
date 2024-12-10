import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common'
import { MattressService } from './mattress.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

@Controller('mattress')
export class MattressController {
	constructor(private readonly mattressService: MattressService) {}

	@Get()
	@ApiOperation({ summary: 'Get all mattresses' })
	@ApiResponse({
		status: 200,
		description: 'Return all mattresses'
	})
	getMattresses() {
		return this.mattressService.getAll()
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get mattress by id' })
	@ApiResponse({
		status: 200,
		description: 'Return mattress by id'
	})
	getMattressById(
		@Param ('id') id: string) 
	{
		return this.mattressService.getById(id)
	}

	@Post()
	@ApiOperation({ summary: 'Create mattress' })
	@ApiResponse({
		status: 201,
		description: 'Return created mattress'
	})
	createMattress(@Body() data: any) {
		return this.mattressService.create(data)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update mattress' })
	@ApiResponse({
		status: 200,
		description: 'Return updated mattress'
	})
	updateMattress(@Body() data: any, @Param('id') id: string) {
		return this.mattressService.update(id, data)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete mattress' })
	@ApiResponse({
		status: 200,
		description: 'Return deleted mattress'
	})
	deleteMattress(@Param('id') id: string) {
		return this.mattressService.delete(id)
	}
}