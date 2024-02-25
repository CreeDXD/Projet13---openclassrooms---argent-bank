// authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/user/login`, { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserProfile: async (token) => {
    try {
      const response = await axios.post(`${API_URL}/user/profile`, {
        // Any data you need to send (if required)
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  changeNames: async (firstName, lastName, token) =>{
    try {
      const response = await axios.put(`${API_URL}/user/profile`, { firstName, lastName },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default authService;
