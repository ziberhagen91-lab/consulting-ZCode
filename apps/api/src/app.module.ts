import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './infra/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { HealthController } from './health.controller';
import { LeadsModule } from './modules/leads/leads.module';
import { FlectraModule } from './infra/flectra/flectra.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true }), PrismaModule, LeadsModule, FlectraModule],
  controllers: [HealthController],
})
export class AppModule {}
