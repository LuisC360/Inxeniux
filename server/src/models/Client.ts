import mongoose, {Schema, Types} from 'mongoose';
import {IClient} from '../types/Client';

const ClientSchema = new Schema({
    name: String,
    first_last_name: String,
    second_last_name: String,
    age: Number,
    gender: String,
    address: {type: Schema.Types.ObjectId, ref: 'Address'}
});

const Client = mongoose.model<IClient>('Client', ClientSchema);
export default Client;
