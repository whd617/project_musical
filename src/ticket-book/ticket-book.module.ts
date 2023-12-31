import { Module } from '@nestjs/common';
import { TicketBookService } from './ticket-book.service';
import { TicketBookController } from './ticket-book.controller';

@Module({
  controllers: [TicketBookController],
  providers: [TicketBookService],
})
export class TicketBookModule {}
