/**
 * @jest-environment jsdom
 */

import createDog from './createDog.js';
import updateDog from './updateDog.js';

describe('check createDog ', () => {
    const img = createDog({ message: 'url' });
    const updatedImg = updateDog(img, { message: 'test' });

    test('img nodeName -> IMG', () => {
        expect(updatedImg.nodeName).toEqual('IMG');
    });

    test('img className => card-image ', () => {
        expect(updatedImg.className).toEqual('card-image');
    });

    test('img src => test', () => {
        expect(updatedImg.src).toEqual('http://localhost/test');
    });
});
