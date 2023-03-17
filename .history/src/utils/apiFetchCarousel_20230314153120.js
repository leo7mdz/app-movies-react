const apiFetchCarousel = async (url) => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = res.json();

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

export default apiFetchCarousel;
