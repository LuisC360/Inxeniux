import {Client} from './Client';

export interface HeadCell {
    disablePadding: boolean;
    id: keyof Client;
    label: string;
    numeric: boolean;
}
