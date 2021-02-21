import { UploadImage } from '../../commands/images/uploadImage';

import { Controller } from '../../protocols';

import { CreateStory } from '../../controllers';

function provisorio(){

}

export const makeCreateStory = (): Controller => {
    const uploadImage = new UploadImage(provisorio);
    const controller = new CreateStory(uploadImage);

    return controller;
}