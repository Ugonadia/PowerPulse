export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_POWER_PULSE_RAPID_API_KEY ,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ba60ca71e4mshfb3c08f780a7f2ep11e26bjsn3ec95e3e2408',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};