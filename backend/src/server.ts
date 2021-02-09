import express from 'express';
import cors from 'cors'

import routes from './routes';

export const server = () => {
    const app = express();
    const PORT = process.env.PORT || 3000;
    
    app.use(cors());
    app.use(express.json());
    app.use(express.static('public'));
    app.use(routes);
    app.listen(PORT, () => {
        console.log(`[server] Listening to port ${PORT}`);
    });
};