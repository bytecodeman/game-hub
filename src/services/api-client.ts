import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "82b9f586092c429bbd644ed812df30a4",
  },
});
