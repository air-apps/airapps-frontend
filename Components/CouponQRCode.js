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
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    heading: {
        lineHeight: 25,
        fontSize: 25,
        marginBottom: 10,
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.4)',
        textShadowOffset: {width: 1, height: 1},
    },
    description: {
        lineHeight: 18,
        fontSize: 18,
        marginBottom: 10,
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.4)',
        textShadowOffset: {width: 1, height: 1},
    },
    image: {
        width: 240,
        height: 240,
        marginBottom: 150,
    }
  });
