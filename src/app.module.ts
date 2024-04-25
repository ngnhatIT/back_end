import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './configs/database.config';
import { CommicModule } from './commics/commic.module';
import { ChapterModule } from './chapters/chapter.module';
import { AuthMiddleware } from './middlewares/auth.middlerware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}),TypeOrmModule.forRoot(databaseConfig), CommicModule, ChapterModule],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('chapters'); 
  }
}

