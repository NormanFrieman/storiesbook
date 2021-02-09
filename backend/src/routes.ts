import express from 'express';

import { adaptRoute } from './adapters/expressRouteAdapter';

import { makeCreateStory, makeSignUpUser } from './generator/controllers';

const routes = express.Router();

routes.post('/createStory', adaptRoute(makeCreateStory()));
routes.post('/insert', adaptRoute(makeSignUpUser()));

export default routes;