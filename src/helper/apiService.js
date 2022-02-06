import axios from 'axios'

const api = process.env.VUE_APP_API_URL

export const apiService = function (method, address, payload) {
    const accessToken = localStorage.getItem('accessToken')
    const headers = {
        'Content-Type': 'Application/json',
        'authorization': `Bearer ${accessToken}`
    }
    return new Promise((resolve, reject) => {
        axios({
            method,
            url: `${api}${address}`,
            data: payload,
            headers
        })
        .then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}