import { Module } from '@nestjs/common';
import { StoryblokService } from './storyblok.service';
import { StoryblokResolver } from './storyblok.resolver';

@Module({
  providers: [StoryblokResolver, StoryblokService]
})
export class StoryblokModule {}
