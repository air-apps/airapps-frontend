import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { parseJson } from './utils/jsonHelper.js'
import Hero from './Components/Hero'
import {Promise} from 'es6-promise'
import {
  StackNavigator,
} from 'react-navigation';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      json: {items: []},
      loading: true,
    }
  }

   fakeFetch () {
      return new Promise((resolve) => {
        setTimeout(() => resolve(
          { items: [
            { type: 'heading', attributes: { title: 'ASOS'} },
            { type: 'background', attributes: { imageUrl: '' } },
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
    return (
      <View style={styles.container}>
        {/*parseJson(this.state.json) */}
      <Hero 
        title={'Apple Palo Alto'} 
        tag={'@ApplePaloAlto'}
        location={'Palo Alto, California'}
        imageUrl={'https://s3-ap-southeast-2.amazonaws.com/assets-ncu4cpljpr5b/facebook_hack/asda.jpg'}
      />
      </View>
    );
  }
}


const RootNavigator = StackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      headerTintColor: 'black'
    }
  }
}, {
  headerMode: 'none'
})
export default RootNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
