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
    const {width,height} = Dimensions.get('window')
    return (
      <View style={{flex:1, flexDirection: 'column', backgroundColor: 'rgba(0,0,0,1)'}}>
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
            height: height*4/3,
            position: 'absolute',
            top: -height/3,
            bottom: 0,
            zIndex: -1,
            opacity: 1
          }}
          source={{uri: this.props.imageUrl}}
          blurRadius={10}
        />
      </View>
    );
  }
}

export default Hero;
