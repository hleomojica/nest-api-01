import { Test, TestingModule } from '@nestjs/testing';
import { StoryblokResolver } from './storyblok.resolver';
import { StoryblokService } from './storyblok.service';

describe('StoryblokResolver', () => {
  let resolver: StoryblokResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoryblokResolver, StoryblokService],
    }).compile();

    resolver = module.get<StoryblokResolver>(StoryblokResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
