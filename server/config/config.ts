import dotenv from 'dotenv';
import path from 'path';
import {env} from 'process';

dotenv.config({
    path: path.resolve(process.cwd(), `environments/${env.NODE_ENV?.trim()}.env`)
});

export default {
    MONGO_USER: 'luiscorona',
    MONGO_PASSWORD: 'vbNyCeuCwVNEPcGV',
    MONGO_DB: 'InxeniuxQA'
};
