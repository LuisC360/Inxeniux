import {Client} from './Client';
import {Address} from './Address';
import {Interests} from './Interests';

export interface CreateClientData {
    client: Client;
    address: Address;
    interests: Interests;
}
