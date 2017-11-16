import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import PropTypes from 'prop-types';

export class ListItem extends Component {

  static defaultProps = {
    text: PropTypes.string,
    imageURL: PropTypes.string,
    key: PropTypes.string
  }

  render() {
    const {text, imageURL, key} = this.props;

    return (
      <View key={key}>
        <Text>{text}</Text>
        <Image style={styles.image} source={{uri: imageURL}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },
});
