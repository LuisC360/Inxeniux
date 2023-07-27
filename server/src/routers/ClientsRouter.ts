import express from 'express';
import {errorCallback} from '../controllers/ErrorController';
import {createClient, deleteClients, getAllClients} from '../controllers/ClientsController';
import {compareAddress, createAddress} from '../controllers/AddressController';
const router = express.Router();

// get
router.get('/', async (req, res) => {
    try {
        const allClients = await getAllClients();
        res.json(allClients);
    } catch (error: unknown) {
        errorCallback(error, res);
    }
});

// add
router.post('/add-client', async (req, res) => {
    try {
        const {client, address} = req.body;
        const idOfSameAddress = await compareAddress(address);
        console.log(idOfSameAddress);
        let addressOfClient = undefined;
        if (idOfSameAddress !== '') {
            createClient(client.name, client.first_last_name, client.second_last_name, client.age, client.gender, idOfSameAddress);
        } else {
            addressOfClient = createAddress(
                address.street,
                address.int_number,
                address.ext_number,
                address.colony,
                address.municipality,
                address.state
            );
            createClient(
                client.name,
                client.first_last_name,
                client.second_last_name,
                client.age,
                client.gender,
                (await addressOfClient)._id
            );
        }
    } catch (error: unknown) {
        errorCallback(error, res);
    }
});

// edit
router.put('/edit-client', async (req, res) => {
    try {
    } catch (error: unknown) {
        errorCallback(error, res);
    }
});

// delete
router.delete('/delete-client', async (req, res) => {
    try {
        const clientsIds = req.body;
        deleteClients(clientsIds);
    } catch (error: unknown) {
        errorCallback(error, res);
    }
});

export default router;
