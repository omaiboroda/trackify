import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ArtistItem from './artistList/ArtistItem';
import ListPlaceholder from '../components/ListPlaceholder';
import InfiniteScrollContent from '../components/InfiniteScrollContent';

@inject('store')
@observer
class ArtistList extends Component {
  state = {
    page: 1,
  }

  componentDidMount() {
    const { store } = this.props;
    store.fetchArtist(this.state.page);
  }


  getMore = () => {
    const { isLoading, page } = this.state;
    if (!isLoading) {
      this.setState({ page: page + 1 });
      this.props.store.fetchArtist(this.state.page);
    }
  }

  render() {
    const { artists, isLoading } = this.props.store;
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
