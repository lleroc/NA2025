import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from 'config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options:{
        port:envs.port
      }
    },
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );  
  await app.listen();
  //sistema hibrido
  //  app.startAllMicroservices();
  //logger.log(`API RestFULL running on port ${envs.port}`);
  logger.log(`Microservicio running on port ${envs.port}`);
}
bootstrap();
