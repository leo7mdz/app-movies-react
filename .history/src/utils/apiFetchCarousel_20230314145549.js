const apiFetchCarousel = async (url) => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = data.json();
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default apiFetchCarousel;
