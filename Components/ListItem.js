import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
      <View key={key} stlye={styles.listitem}>
        <Image style={styles.image} source={{uri: imageURL}} />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 15,
  },
  image: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 15,
    width: 120,
    height: 120,
  },
});
