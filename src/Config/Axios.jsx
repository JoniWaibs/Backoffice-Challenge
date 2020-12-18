import Axios from 'axios'

export const clienteAxios = Axios.create({
    baseURL: 'https://reqres.in/api'
});

export const AxiosProducts = Axios.create({
    baseURL: 'https://fakestoreapi.com/'
})
