import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('http://192.168.225.76:5000/api/users/signin', {
        email,
        password,
      });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw new Error(error.response?.data?.message || 'Network Error');
  }
};


export const signup = async (username, email, password) => {
    try {
      const response = await axios.post('http://192.168.225.76:5000/api/users/signup', {
        username,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Signup error:', error);
      throw new Error(error.response?.data?.message || 'Network Error');
    }
  };