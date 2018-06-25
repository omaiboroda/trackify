import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import ArtistListStore from './artistList/store';
import { Player, Balcony } from '../components';
import ArtistList from './ArtistList';
import TrackList from './TrackList';

const ArtistState = new ArtistListStore();

class Layout extends Component {
  state = {
    currentTrack: undefined,
    currentArtist: undefined,
  }

  handleTrackChange = (track, artist) => {
    this.setState({ currentTrack: track, currentArtist: artist });
  }

  render() {
    const { currentArtist, currentTrack } = this.state;

    return (
      <div>
        <BrowserRouter>
          <Provider store={ArtistState}>
            <Switch>
              <Route path="/" component={ArtistList} exact />
              <Route
                path="/:artistId/tracks"
                render={props => (
                  <TrackList
                    currentTrack={currentTrack}
                    onTrackChange={this.handleTrackChange}
                    {...props}
                  />
                  )}
              />
              <Route component={() => <div>Page not found</div>} />
            </Switch>
          </Provider>
        </BrowserRouter>
        <Balcony height="150px">
          <Player artist={currentArtist} track={currentTrack} />
        </Balcony>
      </div>
    );
  }
}

export default Layout;
