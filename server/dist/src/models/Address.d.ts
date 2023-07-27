import mongoose from 'mongoose';
import { IAddress } from '../types/Address';
declare const Address: mongoose.Model<IAddress, {}, {}, {}, mongoose.Document<unknown, {}, IAddress> & IAddress & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default Address;
