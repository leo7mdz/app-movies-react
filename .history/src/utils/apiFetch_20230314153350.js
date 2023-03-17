import { API_HOST, API_KEY } from "../constants/api.js";

const apiFetch = async (endpoint, search, page = 1) => {
  const urlEndpoint = search
    ? `${API_HOST}${endpoint}?api_key=${API_KEY}&page=${page}&query=${search}`
    : `${API_HOST}${endpoint}?api_key=${API_KEY}&page=${page}`;

  try {
    const res = await fetch(urlEndpoint);

    if (res.ok) {
      const data = await res.json();

      //console.log(data);
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
