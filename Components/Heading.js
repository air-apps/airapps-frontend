import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';

class Heading extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {width} = Dimensions.get('window')
    console.log(width)
    return (
      <View >
      <Image blurRadius={4} source={{uri: 'https://s3-ap-southeast-2.amazonaws.com/assets-ncu4cpljpr5b/facebook_hack/aaa.jpg'}}
        style={{width:width, height: 210, position: 'absolute', top:-60, left:0, zIndex: 0 }} 
      />
      <View style={{backgroundColor: 'rgba(0,0,0,0)'}}>  
        <Text 
          style={{fontSize:40, 
                  fontWeight: '400', 
            fontFamily: 'Avenir', 
            marginLeft:20,
            marginTop: 20,
            textShadowColor: 'rgba(0,0,0,0.4)',
            textShadowOffset: {width: 1, height: 1},
            color:'white'}}> 
            {this.props.title} </Text>
        <Text 
          style={{fontSize:24, 
                  fontWeight: '400', 
            fontFamily: 'Avenir', 
            marginLeft:20,
            marginTop: 0,
            textShadowColor: 'rgba(0,0,0,0.4)',
            textShadowOffset: {width: 1, height: 1},
            color:'white'}}> 
            {this.props.tag} </Text>
        <Text 
          style={{fontSize:16, 
                  fontWeight: '400', 
            fontFamily: 'Avenir', 
            marginLeft:20,
            marginTop: 0,
            textShadowColor: 'rgba(0,0,0,0.4)',
            textShadowOffset: {width: 1, height: 1},
            color:'white'}}> 
            {this.props.location} </Text>
  </View>
      </View>
    );
  }
}

export default Heading;
