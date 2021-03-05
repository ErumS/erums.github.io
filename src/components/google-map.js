import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';
import { Row } from './common';

const Div = styled(Row)`
  & > div {
    position: relative !important;
    width: 400px !important;
    height: 176px !important;
  }
`;

class GoogleMap extends Component {
  render() {
    return (
      <Div justifyContent="center">
        <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{
            lat: 24.5854,
            lng: 73.7125,
          }}
        />
        <Marker />
      </Div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXVGdYr4Mc0D65MClkHFzwhm7XT6qYWa8',
})(GoogleMap);
