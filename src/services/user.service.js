import axios from 'axios';
import authHeader from './auth-header';

// const API_URL = 'http://localhost:8080/api/test/';

const API_URL = "https://api.englishpatient.org/users/me/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL , { headers: authHeader() });
  }
}

export default new UserService();