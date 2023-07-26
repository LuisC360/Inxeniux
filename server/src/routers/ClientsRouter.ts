import express from 'express';
import {errorCallback} from '../controllers/ErrorController';
import {createClient, getAllClients} from '../controllers/ClientsController';
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
    } catch (error: unknown) {
        errorCallback(error, res);
    }
});

// edit
// router.put();

// delete
// router.delete();

export default router;