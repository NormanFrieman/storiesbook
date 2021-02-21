import express from 'express';

import { adaptRoute } from './adapters/expressRouteAdapter';

import { makeCreateStory, makeSignUpUser, makeListUsers, makeDeleteUser } from './generator/controllers';

const routes = express.Router();

routes.post('/createStory', adaptRoute(makeCreateStory()));
routes.post('/insert', adaptRoute(makeSignUpUser()));
routes.get('/users', adaptRoute(makeListUsers()));
routes.delete('/delete', adaptRoute(makeDeleteUser()));

export default routes;