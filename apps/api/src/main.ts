import 'reflect-metadata';
import helmet from 'helmet';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.getHttpAdapter().getInstance().disable("x-powered-by");
  const config = app.get(ConfigService);

  app.use(helmet());

  app.enableCors({ origin: config.get<string>("CORS_ORIGIN") ?? false });

  const port = Number(config.get<string>('PORT') ?? 4000);
  await app.listen(port);

  new Logger('Bootstrap').log(`API listening on ${await app.getUrl()}`);
}

void bootstrap();







