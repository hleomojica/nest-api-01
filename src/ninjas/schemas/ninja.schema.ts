import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ninjaDocument = HydratedDocument<Ninja>


@Schema()
export class Ninja{

    @Prop()
    name:string;

    @Prop()
    weapon:string;
}

export const NinjaSchema = SchemaFactory.createForClass(Ninja)