import express, {Express} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import ApiRouter from './src/routers/ApiRouter';
import config from './config/config';

const app: Express = express();

app.options('*', cors());

mongoose
    .set('strictQuery', true)
    .connect(
        `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.kcjhflf.mongodb.net/${config.MONGO_DB}?retryWrites=true&w=majority`
    )
    .then(async () => {
        app.use('/api', ApiRouter);

        const port = process.env.PORT || 5001;
        const server = app.listen(port);
        server.timeout = 1000 * 60 * 60;
        console.log('-------------------------');
        console.log(`Listening at port `, port);
        console.log('-------------------------');
    })
    .catch((error: unknown) => {
        console.log((error as Error).message);
    });
