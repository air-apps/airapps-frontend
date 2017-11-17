import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';
import Carousel from 'react-native-snap-carousel';

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
      <View style={{flex: 10, alignItems: 'flex-start', alignContent: 'flex-start' }}>
        <Text style={{ 
          color:'#FFFFFF', 
          marginBottom:20, 
          textAlign: 'center',
          width: Dimensions.get('window').width,
          fontFamily: 'Avenir', 
          fontWeight: '400', 
          textShadowColor: 'rgba(0,0,0,0.4)',
          textShadowOffset: {width: 1, height: 1},
          fontSize:20
        }}>Today's Special</Text>

      <Carousel 
        ref={(c) => {this._carousel = c;}}
        data={listitems}
        renderItem={({item}) => <ListItem
              text={item.text}
              imageURL={item.imageURL}
          key={item.key}
          price={item.price}
            />} 
                    sliderWidth={Dimensions.get('window').width}
          itemWidth={200}
/>
      </View>)
  }
}
