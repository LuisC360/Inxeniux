import express from 'express';
import {errorCallback} from '../controllers/ErrorController';
import {createClient, deleteClients, getAllClients} from '../controllers/ClientsController';
import {compareAddress, createAddress} from '../controllers/AddressController';
import {createInterests} from '../controllers/InterestsController';
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
        const {client, address, interests} = req.body;
        const idOfSameAddress = await compareAddress(address);
        const interestsOfClient = await createInterests(
            interests.personalInterests,
            interests.preferredDestinations,
            interests.roomType,
            interests.monthlyIncome,
            interests.yearlyTravels,
            interests.favoriteBooks
        );
        if (idOfSameAddress !== '') {
            createClient(
                client.name,
                client.first_last_name,
                client.second_last_name,
                client.age,
                client.gender,
                idOfSameAddress,
                interestsOfClient._id
            );
        } else {
            const addressOfClient = await createAddress(
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
                addressOfClient._id,
                interestsOfClient._id
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
