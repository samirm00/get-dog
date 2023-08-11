import dom from '../dom.js';
import getDogHandler from '../handlers/getDogHandler.js';

const getDogListener = () => {
    dom.btn.addEventListener('click', getDogHandler);
};

export default getDogListener;
