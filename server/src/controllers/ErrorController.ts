import {Response} from 'express';

export function errorCallback(error: unknown, res: Response): void {
    console.log((error as Error).message);
    res.status(400);
    res.json({
        success: false,
        message: (error as Error).message
    });
}
