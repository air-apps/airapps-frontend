import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      jsx: {items: []}
    }
  }

   fakeFetch () {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
          { items: [
            { type: 'button', attributes: { title: 'Hello world', color:'red' } }
          ] }
        ), 1000)
      })
    }

  async componentDidMount() {
    // This is where we get the custom jsx
    const jsx = await this.fakeFetch()
    this.setState({jsx})
  }


  render() {
    
    insertJsx = (jsx) => {
      console.log(jsx)
     return Object.keys(jsx.items).map((index) => {
       const item = jsx.items[index]
       switch (item.type){
         case 'button': 
           return (<Button title={item.attributes.title} color={item.attributes.color} />)
         default:
           return 
       }
      })
    }

    console.log('apple')
    return (
      <View style={styles.container}>
        {insertJsx(this.state.jsx)}
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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

