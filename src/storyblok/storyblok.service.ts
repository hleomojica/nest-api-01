import { Injectable } from '@nestjs/common';
import { CreateStoryblokInput } from './dto/create-storyblok.input';
import { UpdateStoryblokInput } from './dto/update-storyblok.input';

@Injectable()
export class StoryblokService {
  create(createStoryblokInput: CreateStoryblokInput) {
    return 'This action adds a new storyblok';
  }

  findAll() {
    return `This action returns all storyblok`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storyblok`;
  }

  update(id: number, updateStoryblokInput: UpdateStoryblokInput) {
    return `This action updates a #${id} storyblok`;
  }

  remove(id: number) {
    return `This action removes a #${id} storyblok`;
  }
}
