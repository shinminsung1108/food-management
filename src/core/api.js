import axios from 'axios';

const baseURL = 'http://openapi.foodsafetykorea.go.kr';

const instance = axios.create({
  baseURL,
});

export const getAPI = async (endIdx) => {
  try {
    const response = await instance.get(`/api/6225a8cba704404d83d6/I1850/json/1/${endIdx}/`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
