import React, { Component} from 'react';
import PropTypes from 'prop-types';
import  NavBar  from './NavBar'
import  Heading  from './Heading'
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class Hero extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <NavBar />
        <Heading
          title={this.props.title}
          tag={this.props.tag}
          location={this.props.location}
          imageUrl={this.props.imageUrl}
      />
      </View>
    );
  }
}

export default Hero;
