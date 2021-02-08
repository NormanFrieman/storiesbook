import express from 'express';

import { CreateStory } from './controllers/CreateStory';

const routes = express.Router();

const createStory = new CreateStory();
routes.post('/createStory', (req, res) => createStory.handle(req, res));

export default routes;