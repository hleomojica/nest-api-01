import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { Ninja, ninjaDocument } from './schemas/ninja.schema';

@Injectable()
export class NinjasService {

  constructor(@InjectModel(Ninja.name) private ninjaModel: Model<ninjaDocument>){}

  create(createNinjaDto: CreateNinjaDto) {
    return 'This action adds a new ninja';
  }

  async findAll(weapon: String):Promise<Ninja[]> {
    return this.ninjaModel.find({"weapong":weapon});
  }

  findOne(id: number) {
    return `This action returns a #${id} ninja`;
  }

  update(id: number, updateNinjaDto: UpdateNinjaDto) {
    return `This action updates a #${id} ninja`;
  }

  remove(id: number) {
    return `This action removes a #${id} ninja`;
  }
}
