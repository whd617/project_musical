import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketBookService } from './ticket-book.service';
import { CreateTicketBookDto } from './dto/create-ticket-book.dto';
import { UpdateTicketBookDto } from './dto/update-ticket-book.dto';

@Controller('ticket-book')
export class TicketBookController {
  constructor(private readonly ticketBookService: TicketBookService) {}

  @Post()
  create(@Body() createTicketBookDto: CreateTicketBookDto) {
    return this.ticketBookService.create(createTicketBookDto);
  }

  @Get()
  findAll() {
    return this.ticketBookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketBookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketBookDto: UpdateTicketBookDto) {
    return this.ticketBookService.update(+id, updateTicketBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketBookService.remove(+id);
  }
}
