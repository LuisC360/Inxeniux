import Address from '../models/Address';
import Client from '../models/Client';
import Interests from '../models/Interests';
import {deleteAddress} from './AddressController';

export async function getAllClients() {
    return await Client.find({}).exec();
}

export async function getClientById(clientId: string) {
    return await Client.findOne({_id: clientId}).exec();
}

export async function getClients(clientIds: string[]) {
    return await Client.find({_id: {$in: clientIds}}).exec();
}

export async function getClientsByAddressId(addressId: string) {
    return await Client.find({address: addressId}).exec();
}

export async function createClient(
    name: string,
    first_last_name: string,
    second_last_name: string,
    age: number,
    gender: string,
    address: string,
    interests: string
) {
    const newClient = {
        name,
        first_last_name,
        second_last_name,
        age,
        gender,
        address,
        interests
    };
    return await Client.create(newClient);
}

export async function deleteClients(clientIds: string[]) {
    const ids = [...clientIds];
    const firstClientForDeletion = await getClientById(ids[0]);
    const clientsForDeletion = await getClients(ids);
    const clientsWithSameAddress = await getClientsByAddressId(firstClientForDeletion?._id);

    if (firstClientForDeletion != null && ids.length > 1) {
        const IdsOfClientsWithSameAddress = clientsWithSameAddress.map((client) => client._id);

        // If we have users with the same address, check if they aren't the same ones,
        // if they are, delete the address too
        if (ids.length > 1 && firstClientForDeletion.address != null && areArraysSimilar(ids, IdsOfClientsWithSameAddress)) {
            await Address.deleteOne({_id: firstClientForDeletion.address});
        }

        for (let i = 0; i < ids.length; i += 1) {
            await Interests.deleteOne({_id: clientsForDeletion[i].interests}).exec();
            await Client.deleteOne({_id: clientIds[i]});
        }
    } else if (ids.length === 1 && firstClientForDeletion != null) {
        if (clientsWithSameAddress.length === 0) {
            await Address.deleteOne({_id: firstClientForDeletion.address}).exec();
        }
        await Interests.deleteOne({_id: firstClientForDeletion.interests}).exec();
        await Client.deleteOne({_id: clientIds[0]}).exec();
    }
}

function areArraysSimilar<T>(usersForDeletion: T[], usersWithSameAddress: T[]): boolean {
    if (usersForDeletion.length !== usersWithSameAddress.length) {
        return false;
    }

    for (let i = 0; i < usersForDeletion.length; i++) {
        if (usersForDeletion[i] !== usersWithSameAddress[i]) {
            return false;
        }
    }

    return true;
}
