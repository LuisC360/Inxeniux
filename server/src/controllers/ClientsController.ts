import Client from '../models/Client';
import {deleteAddress} from './AddressController';

export async function getAllClients() {
    return await Client.find({}).exec();
}

export async function createClient(
    name: string,
    first_last_name: string,
    second_last_name: string,
    age: number,
    gender: string,
    address: string
) {
    const newClient = {
        name,
        first_last_name,
        second_last_name,
        age,
        gender,
        address
    };
    return await Client.create(newClient);
}

export async function deleteClients(clientIds: string[]) {
    const ids = [...clientIds];

    // Delete address, but first check if a user has the same address
    // for (let a = 0; a < ids.length; a += 1) {}

    for (let i = 0; i < ids.length; i += 1) {
        await Client.deleteOne({_id: clientIds[i]});
    }
}
