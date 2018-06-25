import { observable, action, runInAction, configure } from 'mobx';
import { getPopularTracks } from './api';

configure({ enforceActions: true });

class ArtistList {
  @observable artists = [];
  @observable isLoading = false;

  @action
  async fetchArtist(page) {
    this.isLoading = true;
    const { artists } = this;
    const tracks = await getPopularTracks(page);
    runInAction(() => {
      this.isLoading = false;
      const artistsNew = tracks.map(a => a.user);
      this.artists = [...artists, ...artistsNew];
    });
  }
}

export default ArtistList;
