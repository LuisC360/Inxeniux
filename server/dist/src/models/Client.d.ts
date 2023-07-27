import mongoose from 'mongoose';
import { IClient } from '../types/Client';
declare const Client: mongoose.Model<IClient, {}, {}, {}, mongoose.Document<unknown, {}, IClient> & IClient & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default Client;
