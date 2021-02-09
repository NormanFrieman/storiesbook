import { uploadImage } from '../../commands/images/uploadImage';

import { Controller } from '../../protocols';

import { CreateStory } from '../../controllers';

export const makeCreateStory = (): Controller => {
    const controller = new CreateStory(uploadImage);

    return controller;
}