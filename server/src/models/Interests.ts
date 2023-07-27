import mongoose, {Schema} from 'mongoose';
import {IInterest} from '../types/Interest';

const InterestsSchema = new Schema({
    personalInterests: Array<String>,
    preferredDestinations: Array<String>,
    roomType: String,
    monthlyIncome: String,
    yearlyTravels: String,
    favoriteBooks: String
});

const Interests = mongoose.model<IInterest>('Interests', InterestsSchema);
export default Interests;
