import mongoose, { Types } from 'mongoose';
import { IClient } from '../types/Client';
declare const Client: mongoose.Model<IClient, {}, {}, {}, mongoose.Document<unknown, {}, IClient> & IClient & {
    _id: Types.ObjectId;
}, any>;
export default Client;
