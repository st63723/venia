import { register } from 'async-ops'

export const GET_PRODUCTS = 'GET_PRODUCTS';


const deserializeJsonResponse = async (response, defaultReturn = []) => {
    const text = await response.text()
    return text.length ? JSON.parse(text) : defaultReturn
}

const service = async (request) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
      }
    const response = await window.fetch("https://fakestoreapi.com/products", options);

    const userDetails = await deserializeJsonResponse(response)

    return userDetails;

}
 
const mock = request => Promise.reject(Error('request is invalid'))
 
register(GET_PRODUCTS, service, mock)