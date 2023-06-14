import axios from 'axios';

async function fetchPictures(namePic, page = 1) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY_API = '35864662-5c3b2f3ed57b7580b501bec47';

  return await axios.get(
    `${BASE_URL}?key=${KEY_API}&q=${namePic}&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${page}`
    );
    
}
export { fetchPictures };
// import axios from 'axios';

// axios.defaults.baseURL = "https://pixabay.com/api/";
// axios.defaults.headers.common['key'] =
//   '35864662-5c3b2f3ed57b7580b501bec47';
                                // abortCtrl;
// export  async function fetchPictures(input,  pageNumb = 1) {
//   const response = await axios.get('', {
//     // signal: abortCtrl.signal,
//     params: {
//       key: '35864662-5c3b2f3ed57b7580b501bec47',
//       q: input,
//       orientation: 'horizontal',
//       safesearch: true,
//       image_type: 'photo',
//       per_page: 12,
//       page: pageNumb,
//     },
//   });

//   return response;
// };
