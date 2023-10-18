import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: "*" })
  app.use(express.static("."))


  const congfig = new DocumentBuilder()
    .setTitle("NODE 33 Final").addBearerAuth().build();
  const document = SwaggerModule.createDocument(app, congfig);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(8080);
}
bootstrap();
