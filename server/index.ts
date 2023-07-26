import express, {Express, Request} from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import ApiRouter from './src/routers/ApiRouter';
import config from './config/config';

const app: Express = express();

const whitelist = ['http://localhost:3000'];

app.use(
    cors<Request>({
        origin: function (origin: string | undefined, callback: (error: Error | null, flag?: boolean) => void) {
            if ((origin != null && whitelist.indexOf(origin) !== -1) || origin == null) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }
    })
);

app.options('*', cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
