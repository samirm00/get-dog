const createDog = (dogData) => {
    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = dogData.message;

    return img;
};

export default createDog;
