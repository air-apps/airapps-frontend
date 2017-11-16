import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { insertJsx } from './utils/jsxHelper.js'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      jsx: {items: []},
      loading: true,
    }
  }

   fakeFetch () {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
          { items: [
            { type: 'button', attributes: { title: 'Hello world', color:'red' } }
          ],
            loading: false
          }
        ), 1000)
      })
    }

  async componentDidMount() {
    // This is where we get the custom jsx
    const jsx = await this.fakeFetch()
    this.setState({jsx})
  }


  render() {
    

    console.log('apple')
    return (
      <View style={styles.container}>
        {insertJsx(this.state.jsx)}
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

