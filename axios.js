import axios from 'axios';

const instance = axios.create({
    baseURL:'https://api.yelp.com/v3/businesses/search',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer  FBQm1vHz3qCpPk3m4CIj4-GH45mWv5OYvSIEx-URH8xJ8qBBQgwjEWvaB2JbI_zqc-Zw3UyVECXdXWXIwxkeW_Q0-VF6GPgEdERy5mqlXxRAP9O_yMUz_7GqgSoGYHYx'
    }
})

export default instance;
 