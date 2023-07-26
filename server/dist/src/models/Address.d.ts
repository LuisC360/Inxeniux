import mongoose, { Types } from 'mongoose';
import { IAddress } from '../types/Address';
declare const Address: mongoose.Model<IAddress, {}, {}, {}, mongoose.Document<unknown, {}, IAddress> & IAddress & {
    _id: Types.ObjectId;
}, any>;
export default Address;
