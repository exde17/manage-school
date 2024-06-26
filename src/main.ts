import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Boostrap');

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  // Configura las opciones de CORS
app.enableCors({
  origin: ['http://localhost:3000', 'http://localhost:3001','http://localhost:5173','http://exde17.com','https://exde17.com','https://render-school.onrender.com','https://front-school-zeta.vercel.app'], 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});

  await app.listen(process.env.PORT || 3000);
  logger.log(`Application is running on: ${process.env.PORT || 3000}`);
}

bootstrap();

