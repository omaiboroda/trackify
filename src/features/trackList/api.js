import humps from 'humps';

export const getTracks = async ({ artistId, page }) => {
  try {
    const tracks = await (await fetch(`https://api-v2.hearthis.at/${artistId}/?type=tracks&page=${page}&count=20`)).json();
    return humps.camelizeKeys(tracks);
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
};

export const getSingleArtist = async ({ artistId }) => {
  try {
    const tracks = await (await fetch(`https://api-v2.hearthis.at/${artistId}/`)).json();
    return humps.camelizeKeys(tracks);
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
};
