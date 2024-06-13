import axiosInstance from './http';

export const getQuestions = async () => {
  return axiosInstance.get('/api/question');
};

export const apiDownloadExamPdf = async () => {
  return axiosInstance.get('/api/question/download', { responseType: 'blob' });
};
