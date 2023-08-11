/**
 * @jest-environment jsdom
 */

import createDog from './createDog.js';

describe('check createDog ', () => {
    const img = createDog({ message: 'url' });

    test('img nodeName -> IMG', () => {
        expect(img.nodeName).toEqual('IMG');
    });

    test('img className => card-image ', () => {
        expect(img.className).toEqual('card-image');
    });

    test('img src => url', () => {
        expect(img.src).toEqual('http://localhost/url');
    });
});
