import { API_URL } from '../constants'
import axios from 'axios'

export const getPropertiesLookUpSvc = (token) => {
    
    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'JWT ' + token
    }
    return axios.get(`${API_URL}/private/properties`, headers)
        .then((response) => {
            const { ok, statusText } = response
            if (!ok) {
                return new Error(statusText);
            }
            return response.json();
      }).catch((error) => {
          return error
      })
}