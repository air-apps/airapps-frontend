import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from './ListItem'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

class LotsOfItems extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {

    const renderProducts = (products) => {
      
      return products.map((product) => {
        return (<ListItem 
          text={product.text}
          imageURL={product.imageURL}
          key={product.imageUrl}
          price={product.price}
          width={110}
          height={110}
          />)
      })
    }



    console.log(this.props, 'props')
    return (
      <View style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'flex-start', alignContent: 'flex-start'}}>
      {renderProducts(this.props.products)}

      </View>
    );
  }
}

export default LotsOfItems;
