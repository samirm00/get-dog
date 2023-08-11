const updateDog = (dogDom, dogData) => {
    dogDom.src = dogData.message;
    return dogDom;
};

export default updateDog;
