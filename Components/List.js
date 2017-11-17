import React, { Component } from 'react';
import { FlatList } from 'react-native';
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

    return (
      <FlatList
        style={{ flex:1 }}
        horizontal={true}
        data={listitems}
        renderItem={({item}) => <ListItem
              text={item.text}
              imageURL={item.imageURL}
              key={item.key}
            />}
      />)
  }
}
