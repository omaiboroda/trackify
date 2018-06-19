import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrackItem from './trackList/TrackItem';
import ListPlaceholder from '../components/ListPlaceholder';
import { getTracks, getSingleArtist } from './trackList/api';
import InfiniteScrollContent from '../components/InfiniteScrollContent';

class TrackList extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    onTrackChange: PropTypes.func.isRequired,
    currentTrack: PropTypes.object,
  }

  static defaultProps = {
    currentTrack: undefined,
  }

  state = {
    artist: undefined,
    tracks: [],
    isLoadingTracks: false,
    page: 1,
  }

  componentDidMount() {
    this.getTracks();
    this.getArtist();
  }

  getTracks = async () => {
    const { page, tracks } = this.state;
    const { artistId } = this.props.match.params;

    this.setState({ isLoadingTracks: true });
    const tracksNew = await getTracks({ artistId, page });
    this.setState({ isLoadingTracks: false });

    this.setState({ tracks: [...tracks, ...tracksNew] });
  }

  getMoreTracks = () => {
    const { isLoadingTracks, page } = this.state;
    if (!isLoadingTracks) {
      this.setState({ page: page + 1 });
      this.getTracks();
    }
  }

  getArtist = async () => {
    const { artistId } = this.props.match.params;
    const artist = await getSingleArtist({ artistId });
    this.setState({ artist });
  }

  handleTrackChange = (track) => {
    const { onTrackChange } = this.props;
    const { artist } = this.state;
    onTrackChange(track, artist);
  }

  render() {
    const { tracks, artist, isLoadingTracks } = this.state;
    const { currentTrack } = this.props;
    const { getMoreTracks } = this;

    return (
      <InfiniteScrollContent height="150px" onReachBottom={getMoreTracks}>
        {
          tracks.map(t => (
            <TrackItem
              key={t.id}
              track={t}
              currentTrack={currentTrack}
              artist={artist}
              onTrackChange={this.handleTrackChange}
            />
          ))
        }
        { isLoadingTracks && <ListPlaceholder count={3} /> }
      </InfiniteScrollContent>
    );
  }
}

export default TrackList;
