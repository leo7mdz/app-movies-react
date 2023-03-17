const apiFetchCarousel = async (url) => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();

      return {
        success: true,
        data: data.results,
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
