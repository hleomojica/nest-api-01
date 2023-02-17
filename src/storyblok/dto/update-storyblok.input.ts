import { CreateStoryblokInput } from './create-storyblok.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStoryblokInput extends PartialType(CreateStoryblokInput) {
  @Field(() => Int)
  id: number;
}
