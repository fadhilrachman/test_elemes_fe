import axios from "axios";

const fetcher = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

fetcher.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response.status == 403) {
    //   toast.error("Token expired");
    //   Cookies.remove(process.env.COOKIE_NAME as string);
    //   window.location.href = "/login";
    // }

    return Promise.reject(error);
  }
);

export { fetcher };
