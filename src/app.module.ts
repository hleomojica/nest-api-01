import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { NinjasModule } from './ninjas/ninjas.module';
import { StoryblokModule } from './storyblok/storyblok.module';

@Module({
  imports: [AuthModule, UsersModule, NinjasModule, StoryblokModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
