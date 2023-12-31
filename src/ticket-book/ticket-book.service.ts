import _ from 'lodash';
import { Injectable } from '@nestjs/common';
import { CreateTicketBookDto } from './dto/create-ticket-book.dto';
import { UpdateTicketBookDto } from './dto/update-ticket-book.dto';

@Injectable()
export class TicketBookService {
  create(createTicketBookDto: CreateTicketBookDto) {
    return 'This action adds a new ticketBook';
  }

  findAll() {
    return `This action returns all ticketBook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketBook`;
  }

  update(id: number, updateTicketBookDto: UpdateTicketBookDto) {
    return `This action updates a #${id} ticketBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketBook`;
  }
}
