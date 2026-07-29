'use strict';

import axios from 'axios';

const API_KEY = '56762760-0b1ca4d58f75edda673894a64';

async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get(`https://pixabay.com/api/?`, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 50,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default getImagesByQuery;
