import React from 'react';
import { StatusBar } from 'react-native';
StatusBar.setBarStyle('light-content', true);
import { StyleSheet, TouchableHighlight, Dimensions, Image, Text, View, Button, FlatList } from 'react-native';
import { parseJson } from './utils/jsonHelper.js'
import Hero from './Components/Hero'
import {Promise} from 'es6-promise'
import NavBar from './Components/NavBar.js'
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
            {type: 'header', attributes: {title: 'Apple Palo Alto', tag: '@ApplePaloAlto', location: 'Apple Palo Alto', imageUrl: 'https://s3-ap-southeast-2.amazonaws.com/assets-ncu4cpljpr5b/facebook_hack/asda.jpg' } },
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
        {parseJson(this.state.json, this.props.navigation)}
      </View>
    );
  }
}

const LocationImage = ({url, text, nav}) => {

  {/*  TEXT CAN ONLY BE SOO LONG*/}
  if (text.length > 11) {
    text = text.slice(0,11).trim() + '..'
  }
  console.log(nav.navigate)
  return (
    <View style={{marginLeft: 15, marginTop: 7, alignItems:'center', justifyContent:'center'}} >
    <TouchableHighlight onPress={() =>nav.navigate('Location')} underlayColor={'rgba(0,0,0,0)'}>
        <Image source={{uri: url}} style={{height:56, width:56, borderRadius:28}} />
    </TouchableHighlight>
        <Text style={{fontSize:10}}>{text}</Text>
      </View>
  )
}


class FacebookHome extends React.Component {

  render() {
    const {width, height} = Dimensions.get('window')
    return (
      <View style={{flex:1, backgroundColor: 'rgba(0,0,0,0)'}}>
        <Image source={require('./images/goodone.png') } style={{width: width, height: height, position: 'absolute', left:0, top:0}}/>
        {/* need some custom shit to get locations in */}
      <Text style={{marginTop:65, marginLeft: 10, fontWeight: '400', fontFamily: 'Helvetica Neue'}}> Near you </Text>

      {/* render location images */}
      <FlatList
        data= {[ {key: 'a', url: 'https://s3-ap-southeast-2.amazonaws.com/assets-ncu4cpljpr5b/facebook_hack/aaa.jpg', text: 'Apple Palo Alto'}, {text: 'Mexican', key: 'b', url: 'https://media-cdn.tripadvisor.com/media/photo-s/03/9e/df/45/mi-casa-mexican-restaurant.jpg'}]}
      renderItem={({item}) => <LocationImage url={item.url} text={item.text} nav={this.props.navigation}/> }
        horizontal
      />

      </View>
    )
  }
}





const RootNavigator = StackNavigator({
  Home: {
    screen: FacebookHome,
  },
  Location: {
    screen: App,
  },
  NavBarOnlyHereToGetProps:{
    screen: NavBar,
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
