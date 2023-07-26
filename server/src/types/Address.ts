import {Document} from 'mongoose';

export interface IAddress extends Document {
    street: string;
    int_number: number;
    ext_number: number;
    colony: string;
    municipality: string;
    state: string;
}
