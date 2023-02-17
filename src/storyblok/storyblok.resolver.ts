import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StoryblokService } from './storyblok.service';
import { Storyblok } from './entities/storyblok.entity';
import { CreateStoryblokInput } from './dto/create-storyblok.input';
import { UpdateStoryblokInput } from './dto/update-storyblok.input';

@Resolver(() => Storyblok)
export class StoryblokResolver {
  constructor(private readonly storyblokService: StoryblokService) {}

  @Mutation(() => Storyblok)
  createStoryblok(@Args('createStoryblokInput') createStoryblokInput: CreateStoryblokInput) {
    return this.storyblokService.create(createStoryblokInput);
  }

  @Query(() => [Storyblok], { name: 'storyblok' })
  findAll() {
    return this.storyblokService.findAll();
  }

  @Query(() => Storyblok, { name: 'storyblok' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.storyblokService.findOne(id);
  }

  @Mutation(() => Storyblok)
  updateStoryblok(@Args('updateStoryblokInput') updateStoryblokInput: UpdateStoryblokInput) {
    return this.storyblokService.update(updateStoryblokInput.id, updateStoryblokInput);
  }

  @Mutation(() => Storyblok)
  removeStoryblok(@Args('id', { type: () => Int }) id: number) {
    return this.storyblokService.remove(id);
  }
}
