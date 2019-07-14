import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

import sheet from '../styles/sheet';

import BaseExamplePropTypes from './common/BaseExamplePropTypes';
import Page from './common/Page';


// const styles = MapboxGL.StyleSheet.create({
//   boxFill: {
//     fillColor: MapboxGL.StyleSheet.source(
//       [[0, 'green'], [1, 'blue']],
//       'box',
//       MapboxGL.InterpolationMode.Categorial,
//     ),
//     fillAntialias: true,
//   },
// });

const VECTOR_SOURCE_URL =
  'mapbox://nickitaliano.cj94go8xl18fl2qp92v8bdivv-4kgl9';

class CustomVectorSource extends React.PureComponent {
  static propTypes = {
    ...BaseExamplePropTypes,
  };

  render() {


    return (
      <Page {...this.props}>
        <MapboxGL.MapView
            logoEnabled={false}
          style={sheet.matchParent}


        >
          <MapboxGL.Camera
              followZoomLevel={16} // that's working
              followPitch={16} // not working
              followUserLocation={true}
              centerCoordinate={ [113.31931876194517,23.140404470231246]}
              isUserInteraction={true}
              followUserMode={'course'} // compass or normal don't make it work neither
              moveTo={[113.31931876194517,23.140404470231246]}
          />
          <MapboxGL.VectorSource
            id="customSourceExample"
            url={VECTOR_SOURCE_URL}
          >
            <MapboxGL.FillLayer
              id="customSourceFill"
              sourceLayerID="react-native-example"
               style={{
                 fillColor: [
                   'step',
                   ['zoom'],
                   'blue',
                   20, 'green'
                 ]
               }}
            />
          </MapboxGL.VectorSource>
        </MapboxGL.MapView>
      </Page>
    );
  }
}

export default CustomVectorSource;
