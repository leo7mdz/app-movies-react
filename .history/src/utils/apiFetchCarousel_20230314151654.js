const apiFetchCarousel = async (url) => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = data.json();
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
      status: error.message,
    };
  }
};

export default apiFetchCarousel;
