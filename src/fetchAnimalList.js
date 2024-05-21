const fetchAnimalList = async () => {

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/animals?`);

    if(!apiRes.ok){
        throw new Error(`animals fetch not ok`);
    }

    return apiRes.json();
};

export default fetchAnimalList;