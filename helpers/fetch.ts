import { ParametersRequest } from "../types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const appId = process.env.NEXT_PUBLIC_APP_ID;


export const fetcher = (request:ParametersRequest) => {
    const {endpoint, method, data}= request

    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url, {
            headers: {
                'app-id': `${appId}`
            },
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'app-id': `${appId}`
            },
            body: JSON.stringify(data)
        });
    }
}
