const api = 'http://localhost:3002/api/react-videos';

export const ApiService = {

    get(endPoint){
        return fetch(`${api}/${endPoint}`)
        .then(response => response.json());
    }
}