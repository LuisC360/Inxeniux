import mongoose, {Schema} from 'mongoose';
import {IClient} from '../types/Client';

const ClientSchema = new Schema({
    name: String,
    first_last_name: String,
    second_last_name: String,
    age: Number,
    gender: String,
    address: {type: Schema.Types.ObjectId, ref: 'Address'},
    interests: {type: Schema.Types.ObjectId, ref: 'Interests'}
});

const Client = mongoose.model<IClient>('Client', ClientSchema);
export default Client;
