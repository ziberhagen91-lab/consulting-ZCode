import { Module } from '@nestjs/common';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [LeadsController],
  imports: [AuthModule],
  providers: [LeadsService],
})
export class LeadsModule {}

