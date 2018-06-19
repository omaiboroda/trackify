import React, { Component } from 'react';
import { getPopularTracks } from './artistList/api';
import ArtistItem from './artistList/ArtistItem';
import ListPlaceholder from '../components/ListPlaceholder';
import InfiniteScrollContent from '../components/InfiniteScrollContent';

class ArtistList extends Component {
  state = {
    artists: [],
    isLoading: false,
    page: 1,
  }

  componentDidMount() {
    this.getPopularArtists();
  }

  getPopularArtists = async () => {
    const { page, artists } = this.state;
    this.setState({ isLoading: true });
    const tracks = await getPopularTracks(page);
    this.setState({ isLoading: false });
    const artistsNew = tracks.map(a => a.user);
    this.setState({ artists: [...artists, ...artistsNew] });
  }

  getMore = () => {
    const { isLoading, page } = this.state;
    if (!isLoading) {
      this.setState({ page: page + 1 });
      this.getPopularArtists();
    }
  }

  render() {
    const { artists, isLoading } = this.state;
    const { getMore } = this;

    return (
      <InfiniteScrollContent height="150px" onReachBottom={getMore}>
        {/* Warning: Math.random as a key is only for demo purpose,
          due to absense of API for unique aritsts */}
        { artists.map(artist => <ArtistItem key={Math.random()} artist={artist} />) }
        { isLoading && <ListPlaceholder count={3} /> }
      </InfiniteScrollContent>
    );
  }
}

export default ArtistList;
