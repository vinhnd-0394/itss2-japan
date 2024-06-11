import axiosInstance from './http';

export const getQuestions = async () => {
  return axiosInstance.get('/api/question');
};
