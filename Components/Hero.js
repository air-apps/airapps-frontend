import React, { Component} from 'react';
import PropTypes from 'prop-types';
import  NavBar  from './NavBar'
import  Heading  from './Heading'
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';

class Hero extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {width} = Dimensions.get('window')
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <NavBar 
          nav={this.props.nav}
        />
        <Heading
          title={this.props.title}
          tag={this.props.tag}
          location={this.props.location}
          imageUrl={this.props.imageUrl}
        />
        <Image
          style={{
            width: width,
            height: 900,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1
          }}
          source={{uri: 'https://s3-ap-southeast-2.amazonaws.com/assets-ncu4cpljpr5b/facebook_hack/asda.jpg'}}
          blurRadius={10}
        />
      </View>
    );
  }
}

export default Hero;
