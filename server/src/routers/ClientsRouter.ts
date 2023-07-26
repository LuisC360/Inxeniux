import express from 'express';
import {errorCallback} from '../controllers/ErrorController';
import {createClient, deleteClients, getAllClients} from '../controllers/ClientsController';
import bodyParser from 'body-parser';
import {IClient} from '../types/Client';
import {ObjectId} from 'mongoose';
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
        const client = req.body;
        createClient(client.name, client.first_last_name, client.second_last_name, client.age, client.gender);
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
