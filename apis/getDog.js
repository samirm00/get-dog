const getDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(
                `Failed to fetch a dog with status : ${res.status}`,
            );
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export default getDog;
