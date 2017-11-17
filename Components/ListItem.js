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
    const {text, imageURL, key, price = "$10", width=200, height=200, BoxWidth} = this.props;

    return (
      <View key={key} stlye={{flex:1}}>
        <Image style={{height: height, width: width, marginLeft: 6, marginRight: 6, marginBottom: 6, borderRadius: 14}} source={{uri: imageURL}} />
        <Text style={styles.text}>{price} {text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFFFFF'
  },
  listitem: {
    flex: 1,
  },
  image: {
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 6,
    borderRadius: 14,
  },
});
