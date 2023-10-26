import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b29c5fbf8c414cce9ef2cfca23e392da",
  },
});
