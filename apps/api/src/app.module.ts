import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './infra/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { HealthController } from './health.controller';
import { LeadsModule } from './modules/leads/leads.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true }), PrismaModule, LeadsModule],
  controllers: [HealthController],
})
export class AppModule {}
