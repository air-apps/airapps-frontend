import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { parseJson } from './utils/jsonHelper.js'
import {Promise} from 'es6-promise'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      json: {items: []},
      loading: true,
    }

    global.PaymentRequest = require('react-native-payments').PaymentRequest;

    const DETAILS = {
      id: 'basic-example',
      displayItems: [
        {
          label: 'Movie Ticket',
          amount: { currency: 'USD', value: '15.00' }
        }
      ],
      total: {
        label: 'Merchant Name',
        amount: { currency: 'USD', value: '15.00' }
      }
    };

    const METHOD_DATA = [{
      supportedMethods: ['apple-pay'],
      data: {
        merchantIdentifier: 'merchant.com.your-app.namespace',
        supportedNetworks: ['visa', 'mastercard', 'amex'],
        countryCode: 'US',
        currencyCode: 'USD',
        paymentMethodTokenizationParameters: {
        parameters: {
          gateway: 'stripe',
          'stripe:publishableKey': 'your_publishable_key',
        }
      }
      }
    }];

    const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS);
    
  }

   fakeFetch () {
     return new Promise((resolve) => {
       setTimeout(
             () => resolve({
               items: [
                 {
                   type: 'button',
                   attributes: {title: 'Hello world', color: 'red'}
                 },
                 {
                   type: 'list',
                   attributes: [
                     {
                       text: 'List item',
                       imageURL:
                           'https://www.facebook.com/apple-touch-icon.png',
                       key: '1'
                     },
                     {
                       text: 'List item2 ',
                       imageURL:
                           'https://www.facebook.com/apple-touch-icon.png',
                       key: '2'
                     }
                   ]
                 }
               ],
               loading: false
             }),
             5000)})
    }

  async componentDidMount() {
    // This is where we get the custom json
    const json = await this.fakeFetch()
    this.setState({json})
  }


  render() {
    return (
      <View style={styles.container}>
        {parseJson(this.state.json)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
