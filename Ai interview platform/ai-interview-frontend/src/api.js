import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // your backend URL
});

export const generateQuestion = (category, topic) =>
  API.post("/interview/generate-question", { category, topic });

export const analyzeAnswer = (answer, category, topic) =>
  API.post("/interview/analyze-answer", { answer, category, topic });

export default API;
