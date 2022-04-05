const axios = require('axios').default;


const login = async (username: string, password: string) => {
 
    return axios({
        method: 'post',
        url: 'http://localhost:8000/api-auth/login/',
        data: {
          username: username,
          password: password
        }
      });
    }


export {login}