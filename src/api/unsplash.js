import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID mp-WzpMinjfAmk2-t5syl8njCKyxg5qIw_N-IPq4BMI",
  },
});
