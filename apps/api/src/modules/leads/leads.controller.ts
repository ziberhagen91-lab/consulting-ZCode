import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLeadResponse, SyncStatusResponse } from '@consulting/shared';
import { LeadsService } from './leads.service';
import { CreateLeadDto, ZodLeadPipe } from './create-lead.dto';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  /** Public endpoint used by the website contact form. */
  @Post()
  async create(
    @Body(new ZodLeadPipe()) input: CreateLeadDto,
  ): Promise<CreateLeadResponse> {
    const lead = await this.leadsService.create(input);
    return { id: lead.id, status: lead.status };
  }

  /** POC verification: how far did this lead get in the sync pipeline? */
  @Get(':id')
  async getSyncStatus(@Param('id') id: string): Promise<SyncStatusResponse> {
    return this.leadsService.getSyncStatus(id);
  }
}
