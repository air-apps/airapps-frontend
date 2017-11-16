import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { parseJson } from './utils/jsonHelper.js'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      json: {items: []},
      loading: true,
    }
  }

   fakeFetch () {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
          { items: [
            { type: 'button', attributes: { title: 'Hello world', color:'red' } },
            { type: 'listitem', attributes: { text: 'List item', imageURL: 'https://www.facebook.com/apple-touch-icon.png',
            key: '1' } }
          ],
            loading: false
          }
        ), 1000)
      })
    }

  async componentDidMount() {
    // This is where we get the custom json
    const json = await this.fakeFetch()
    this.setState({json})
  }


  render() {
    console.log('apple')
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
