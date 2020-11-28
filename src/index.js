import axios from 'axios';

const init = async() =>{
    try {
        const users = (await axios.get('/api/users')).data;
        const cars = (await axios.get('/api/cars')).data;
        console.log(users, cars);
    } catch (ex) {
        console.log(ex);
    }

};

init();