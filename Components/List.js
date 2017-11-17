import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';

export class List extends Component {

   static defaultProps =
    PropTypes.arrayOf({
      listitems: PropTypes.shape({
        text: PropTypes.string,
        imageURL: PropTypes.string,
        key: PropTypes.string
      })
    })

  render() {
    const {listitems} = this.props;

    return (
      <View style={{ flex:1 }}>
        <Text style={{ color:'#FFFFFF', left:8, bottom:8 }}>Order Now</Text>
      <FlatList
        style={{ flex:1 }}
        horizontal={true}
        data={listitems}
        renderItem={({item}) => <ListItem
              text={item.text}
              imageURL={item.imageURL}
              key={item.key}
            />}
      />
      </View>)
  }
}
