import { IAddress } from '../types/Address';
import { IClient } from '../types/Client';
import { Document, Types } from 'mongoose';
export declare function getAllClients(): Promise<(Document<unknown, {}, IClient> & IClient & {
    _id: Types.ObjectId;
})[]>;
export declare function createClient(name: string, first_last_name: string, second_last_name: string, age: number, gender: string, address: IAddress): Promise<void>;