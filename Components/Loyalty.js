import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export class Loyalty extends Component {

  static defaultProps = {
    title: PropTypes.string,
    value: PropTypes.string,
  }

  render() {
    const {title, value} = this.props;

    return (
      <View style={styles.row}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    lineHeight: 20,
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    color: 'white',
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: {width: 1, height: 1},
  }
});
