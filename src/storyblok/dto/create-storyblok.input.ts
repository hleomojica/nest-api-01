import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStoryblokInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
