import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.enableCors({ origin: true });

  const port = Number(config.get<string>('PORT') ?? 4000);
  await app.listen(port);

  new Logger('Bootstrap').log(`API listening on ${await app.getUrl()}`);
}

void bootstrap();




