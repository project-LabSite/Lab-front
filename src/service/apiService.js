import axios from "axios";

const apiBaseUrl = "http://localhost:3001/api";

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

//게시물 관련 api

export const createPost = async (category, data) => {
  try {
    const res = await apiClient.post(`/${category}/write`, data);
    return res.data;
  } catch (error) {
    console.error("Error creatPost : ", error);
    throw error;
  }
};

export const getPost = async (category) => {
  try {
    const res = await apiClient.get(`/${category}`);
    console.log("Get Post : ", res.data);
    return res.data;
  } catch (error) {
    console.error("Error getPost : ", error);
    throw error;
  }
};

export const getPostDetail = async (category, boardNum) => {
  try {
    const res = await apiClient.get(`/${category}/posts/${boardNum}`);
    return res.data;
  } catch (error) {
    console.error("Error getPostDetail: ", error);
    throw error;
  }
};
