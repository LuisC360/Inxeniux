import {Document} from 'mongoose';

export interface IInterest extends Document {
    personalInterests: string[];
    preferredDestinations: string[];
    roomType: string;
    monthlyIncome: string;
    yearlyTravels: string;
}
