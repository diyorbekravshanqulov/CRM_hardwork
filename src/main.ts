import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000
  app.setGlobalPrefix('api');
  await app.listen(PORT, (): void => {
    console.log(`http://127.0.0.1:${PORT}`);
  });
}
bootstrap();
