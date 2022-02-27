import {useEffect} from "react";

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response
    return Promise.reject(error);
}


export const getAllGateway = () =>
    fetch("api/allgateway")
        .then(checkStatus);
