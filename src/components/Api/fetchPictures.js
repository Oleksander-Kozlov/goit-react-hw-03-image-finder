// import axios from 'axios';

// async function fetchPictures(namePic, page = 1) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const KEY_API = '35864662-5c3b2f3ed57b7580b501bec47';

//   return await axios.get(
//     `${BASE_URL}?key=${KEY_API}&q=${namePic}&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${page}`
//     );
    
// }
// export { fetchPictures };



import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
// axios.defaults.headers.common['key'] =
//   '35864662-5c3b2f3ed57b7580b501bec47';
                                // abortCtrl;
export  async function fetchPictures( namePic, abortCtrl, page = 1 ) {
  const response = await axios.get('api/', {
    signal: abortCtrl.signal,
    params: {
      key: '35864662-5c3b2f3ed57b7580b501bec47',
      q: namePic,
      orientation: 'horizontal',
      safesearch: true,
      image_type: 'photo',
      per_page: 12,
      page: page,
    },
  });

  return response.data;
};
