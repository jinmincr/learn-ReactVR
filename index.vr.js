import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Box,Cylinder,Sphere
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();

    this.state = {textColor: 'white'};
  }
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
 <Sphere style={{transform: [{translate: [0, 0, -3]}]}}
 radius={0.5}
  widthSegments={20}
  heightSegments={12}
/>
      </View>

    
       /* <View>
        <Pano source={asset('chess-world.jpg')}/>
  <Text
    style={{
      backgroundColor: '#777879',
          fontSize: 0.8,
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, 0, -3]}],
    }}>
    hello
    </Text>
    </View>*/
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
