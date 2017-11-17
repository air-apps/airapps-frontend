import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { NativeModules } from 'react-native';

export class ListItem extends Component {

  static defaultProps = {
    text: PropTypes.string,
    imageURL: PropTypes.string,
    key: PropTypes.string
  }

  tapItem(price, text) {
    const RNBranch = NativeModules.RNBranch
    RNBranch.makePayment(price.replace('$', ''), text)
  }

  render() {
    const {text, imageURL, key, price = "$10"} = this.props;

    return (
      <TouchableHighlight onPress={() => this.tapItem(price, text)}>
        <View key={key} stlye={styles.listitem}>
          <Image style={styles.image} source={{uri: imageURL}} />
          <Text style={styles.text}>{price} {text}</Text>
        </View>
      </TouchableHighlight>
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
    width: 200,
    height: 200,
    borderRadius: 14,
  },
});
