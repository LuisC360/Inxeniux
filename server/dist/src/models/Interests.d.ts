import mongoose from 'mongoose';
import { IInterest } from '../types/Interest';
declare const Interests: mongoose.Model<IInterest, {}, {}, {}, mongoose.Document<unknown, {}, IInterest> & IInterest & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default Interests;
