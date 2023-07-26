import mongoose, {Schema, Types} from 'mongoose';
import {IAddress} from '../types/Address';

const AdressSchema = new Schema({
    street: String,
    int_number: Number,
    ext_number: Number,
    colony: String,
    municipality: String,
    state: String
});

const Address = mongoose.model<IAddress>('Address', AdressSchema);
export default Address;
