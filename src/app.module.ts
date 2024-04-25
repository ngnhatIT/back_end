import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './configs/database.config';
import { CommicModule } from './commics/commic.module';
import { ChapterModule } from './chapters/chapter.module';
import { AuthMiddleware } from './middlewares/auth.middlerware';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), CommicModule, ChapterModule],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('chapters'); // Đăng ký middleware cho các route có tiền tố là 'comics' và 'chapters'
  }
}

