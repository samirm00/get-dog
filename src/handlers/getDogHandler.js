import dom from '../dom.js';
import getDog from '../../apis/getDog.js';
import createDog from '../components/createDog.js';
import updateDog from '../components/updateDog.js';

const getDogHandler = async () => {
    const dogData = await getDog();

    // check if img already exists on the DOM
    const imgExist = document.querySelector('.card-image');
    if (!imgExist) {
        const dogDom = createDog(dogData);
        dom.root.append(dogDom);
    } else {
        updateDog(imgExist, dogData);
    }
};

export default getDogHandler;
