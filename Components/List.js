import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';

export class List extends Component {

   static defaultProps =
    PropTypes.arrayOf({
      listitem: PropTypes.shape({
        text: PropTypes.string,
        imageURL: PropTypes.string,
        key: PropTypes.string
      })
    })

  render() {
    const {listitems} = this.props;

    return (listitems.map((item) => <ListItem
    text={item.text}
    imageURL={item.imageURL}
    key={item.key}
    />))
  }
}
