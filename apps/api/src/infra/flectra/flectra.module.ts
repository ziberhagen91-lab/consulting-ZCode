import { Module } from '@nestjs/common';
import { FlectraService } from './flectra.service';

@Module({
  providers: [FlectraService],
  exports: [FlectraService],
})
export class FlectraModule {}
