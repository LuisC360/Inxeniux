import {Document, Types} from 'mongoose';

interface Gender {
    gender: 'Male' | 'Female' | 'Non-binary';
}

export interface IClient extends Document {
    name: string;
    first_last_name: string;
    second_last_name: string;
    age: number;
    gender: Gender;
    address: Types.ObjectId;
    interests: Types.ObjectId;
}
