import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableHighlight } from 'react-native';

class NavBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ marginTop:30, marginLeft:20, zIndex:99, backgroundColor: 'rgba(0,0,0,0)' }}>
            <TouchableHighlight onPress={() => {this.props.nav.goBack()}} underlayColor={'rgba(0,0,0,0)'} >
        <Text style={{fontSize: 18, fontWeight: '300', color:'white', textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowOffset: {width: -1, height: -1}}}>
              
          <Text style={{fontSize:24, fontWeight: 'bold', textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowOffset: {width: -1, height: -1}}}> {'<'} </Text>
          {'Nearby'}
        </Text>
      </TouchableHighlight>
      </View>

    );
  }
}

export default NavBar;
