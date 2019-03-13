/**
 * Created by Avell on 13.03.2019.
 */

import {apiUrl} from '../configs/endpoints';
import {proxyUrl} from '../configs/endpoints';

class Api{
    static getUser(){
       return fetch(proxyUrl + apiUrl)
            .then(response => {
                return response.json()
            })

    }
}

export default (Api);