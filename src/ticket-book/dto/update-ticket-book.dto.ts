import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketBookDto } from './create-ticket-book.dto';

export class UpdateTicketBookDto extends PartialType(CreateTicketBookDto) {}
