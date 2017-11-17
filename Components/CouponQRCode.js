import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

export class CouponQRCode extends Component {

  static defaultProps = {
    imageURL: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }

  render() {
    const {imageURL, title, description} = this.props;

    return (
      <View style={styles.row}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Image style={styles.image} source={{uri: imageURL}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        lineHeight: 15,
        fontSize: 15,
    },
    description: {
    },
    image: {
        width: 120,
        height: 120,
    }
  });
