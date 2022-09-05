import { API_HOST, API_KEY } from "../constants/api.js";

const apiFetch = async (endpoint, page) => {
  try {
    const res = await fetch(
      `${API_HOST}${endpoint}?api_key=${API_KEY}&page=${page}`
    );

    if (res.ok) {
      const data = await res.json();

      console.log(data);
      return {
        success: true,
        data,
      };
    }

    return {
      success: false,
      statusCode: res.status,
    };
  } catch (error) {
    return {
      success: false,
      code: 500,
    };
  }
};

export default apiFetch;
