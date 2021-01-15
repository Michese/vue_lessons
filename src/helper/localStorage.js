export const setLocalStorage = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch(error) {
        console.log('error', error);
    }
}

export const getLocalStorage = key => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch(error) {
        console.log('error', error);
        return null;
    }
}