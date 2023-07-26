import Client from '../models/Client';
import {IAddress} from '../types/Address';
import {IClient} from '../types/Client';
import {Document, Types} from 'mongoose';

export async function getAllClients(): Promise<
    (Document<unknown, {}, IClient> &
        IClient & {
            _id: Types.ObjectId;
        })[]
> {
    return await Client.find({}).exec();
}

export async function createClient(
    name: string,
    first_last_name: string,
    second_last_name: string,
    age: number,
    gender: string,
    address: IAddress
) {
    // const newClient = {
    //     name,
    //     first_last_name,
    //     second_last_name,
    //     age,
    //     gender,
    //     address
    // };
    // return await Client.create(newClient);
}
