import Address from '../models/Address';
import AddressInterface from '../interfaces/Address';

export async function getAddressById(addressId: string) {
    return await Address.findById(addressId).exec();
}

export async function getAllAddresses() {
    return await Address.find({}).exec();
}

export async function createAddress(
    street: string,
    int_number: string,
    ext_number: string,
    colony: string,
    municipality: string,
    state: string
) {
    const newAddress = {
        street,
        int_number: int_number,
        ext_number: ext_number,
        colony,
        municipality,
        state
    };
    return await Address.create(newAddress);
}

export async function deleteAddress(addressId: string) {
    await Address.deleteOne({_id: addressId});
}

export async function compareAddress(newAddress: AddressInterface) {
    const currentSavedAddresses = await getAllAddresses();

    for (let i = 0; i < currentSavedAddresses.length; i += 1) {
        const {street, int_number, ext_number, colony, municipality, state} = currentSavedAddresses[i];
        const savedAddressWithoutId: AddressInterface = {
            street,
            int_number,
            ext_number,
            colony,
            municipality,
            state
        };
        const newAddressWithoutId: AddressInterface = {
            street: newAddress.street,
            int_number: newAddress.int_number,
            ext_number: newAddress.ext_number,
            colony: newAddress.colony,
            municipality: newAddress.municipality,
            state: newAddress.state
        };
        const savedAddressKeys = Object.keys(savedAddressWithoutId);
        const newObjectKeys = Object.keys(newAddressWithoutId);

        if (savedAddressKeys.length !== newObjectKeys.length) {
            return '';
        }

        if (areSameValues(savedAddressKeys, savedAddressWithoutId, newAddressWithoutId)) {
            return currentSavedAddresses[i]._id;
        }

        return '';
    }

    return '';
}

function areSameValues(savedAddressKeys: string[], savedAddress: AddressInterface, newAddress: AddressInterface): boolean {
    for (const key of savedAddressKeys) {
        switch (key) {
            case 'street':
                if (savedAddress.street !== newAddress.street) {
                    return false;
                }
                break;
            case 'int_number':
                if (savedAddress.int_number.toString() !== newAddress.int_number.toString()) {
                    return false;
                }
                break;
            case 'ext_number':
                if (savedAddress.ext_number.toString() !== newAddress.ext_number.toString()) {
                    return false;
                }
                break;
            case 'colony':
                if (savedAddress.colony !== newAddress.colony) {
                    return false;
                }
                break;
            case 'municipality':
                if (savedAddress.municipality !== newAddress.municipality) {
                    return false;
                }
                break;
            default:
                if (savedAddress.state !== newAddress.state) {
                    return false;
                }
                break;
        }
    }

    return true;
}
