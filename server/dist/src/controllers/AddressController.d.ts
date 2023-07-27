/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import AddressInterface from '../interfaces/Address';
export declare function getAddressById(addressId: string): Promise<(import("mongoose").Document<unknown, {}, import("../types/Address").IAddress> & import("../types/Address").IAddress & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export declare function getAllAddresses(): Promise<(import("mongoose").Document<unknown, {}, import("../types/Address").IAddress> & import("../types/Address").IAddress & {
    _id: import("mongoose").Types.ObjectId;
})[]>;
export declare function createAddress(street: string, int_number: string, ext_number: string, colony: string, municipality: string, state: string): Promise<import("mongoose").Document<unknown, {}, import("../types/Address").IAddress> & import("../types/Address").IAddress & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare function deleteAddress(addressId: string): Promise<void>;
export declare function compareAddress(newAddress: AddressInterface): Promise<any>;
