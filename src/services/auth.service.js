import axios from "axios";

// const API_URL = "http://localhost:8080/api/auth/";

const API_URL = "https://api.englishpatient.org/login/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL, {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
