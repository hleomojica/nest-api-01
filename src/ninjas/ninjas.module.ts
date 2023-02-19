import { Module } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { NinjasController } from './ninjas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ninja, NinjaSchema } from './schemas/ninja.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ninja.name, schema: NinjaSchema }])],
  controllers: [NinjasController],
  providers: [NinjasService]
})
export class NinjasModule {}
