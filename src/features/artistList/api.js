import humps from 'humps';

// eslint-disable-next-line import/prefer-default-export
export const getPopularTracks = async (page = 1) => {
  try {
    const artists = await (await fetch(`https://api-v2.hearthis.at/feed/?type=popular&page=${page}&count=20`)).json();
    return humps.camelizeKeys(artists);
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
};
