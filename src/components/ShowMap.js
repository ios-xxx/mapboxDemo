import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

import sheet from '../styles/sheet';
import {onSortOptions} from '../utils';

import BaseExamplePropTypes from './common/BaseExamplePropTypes';
import TabBarPage from './common/TabBarPage';

class ShowMap extends React.Component {
  static propTypes = {
    ...BaseExamplePropTypes,
  };

  constructor(props) {
    super(props);

    this._mapOptions = Object.keys(MapboxGL.StyleURL)
      .map(key => {
        return {
          label: key,
          data: MapboxGL.StyleURL[key],
        };
      })
      .sort(onSortOptions);

    this.state = {
      styleURL: this._mapOptions[0].data,
    };

    this.onMapChange = this.onMapChange.bind(this);
  }

  onMapChange(index, styleURL) {
    this.setState({styleURL});
  }

  render() {
    return (
      <TabBarPage
        {...this.props}
        scrollable
        options={this._mapOptions}
        onOptionPress={this.onMapChange}
      >
        <MapboxGL.MapView
          showUserLocation={true}
          zoomScale={16}
          zoomTo={16}
          flyTo={[ 113.26147, 23.13162]}
          moveTo={[ 113.26147, 23.13162]}
          centerContent={[ 113.26147, 23.13162]}
          zoomEnabled={true}
          userTrackingMode={MapboxGL.UserTrackingModes.Follow}
          styleURL={this.state.styleURL}
          style={sheet.matchParent}
          localizeLabels={'zh'}
        />
      </TabBarPage>
    );
  }
}

export default ShowMap;
