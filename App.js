import React from 'react';
import { StatusBar } from 'react-native';
StatusBar.setBarStyle('light-content', true);
import { StyleSheet, TouchableHighlight, Dimensions, Image, Text, View, FlatList } from 'react-native';
import { parseJson } from './utils/jsonHelper.js'
import NavBar from './Components/NavBar.js'
import {
  StackNavigator,
} from 'react-navigation';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      json: {
        template: {
          items: [],
        }
      },
      loading: true,
    }
  }

  async componentDidMount() {
    const { name } = this.props.navigation.state.params
    const data = await fetch(`https://airapps-api.now.sh/apps/${name}`) //this.fakeFetch()
    const json = (await data.json()).data
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

const LocationImage = ({name, url, text, nav, key}) => {

  {/*  TEXT CAN ONLY BE SOO LONG*/}
  if (text.length > 11) {
    text = text.slice(0,11).trim() + '..'
  }
  return (
    <View style={{marginLeft: 15, marginTop: 7, alignItems:'center', justifyContent:'center'}} key={key} >
    <TouchableHighlight onPress={() =>nav.navigate('Location', {name})} underlayColor={'rgba(0,0,0,0)'}>
        <Image source={{uri: url}} style={{height:56, width:56, borderRadius:28}} />
    </TouchableHighlight>
        <Text style={{fontSize:10}}>{text}</Text>
      </View>
  )
}


class FacebookHome extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      json: [{
        template: {
          items: [{attributes: { title: '' } }],
        }
      }],
      loading: true,
    }
  }

  async componentDidMount() {
    const appName = 'starbucks'
    const data = await fetch(`https://airapps-api.now.sh/apps`) //this.fakeFetch()
    const json = (await data.json()).data
    console.log(json)
    this.setState({json})
  }
  render() {
    console.log(this.state.json[0].template.items[0].attributes.title)
    const {width, height} = Dimensions.get('window')
    return (
      <View style={{flex:1, backgroundColor: 'rgba(0,0,0,0)'}}>
        <Image source={require('./images/goodone.png') } style={{width: width, height: height, position: 'absolute', left:0, top:0}}/>
        {/* need some custom shit to get locations in */}
      <Text style={{marginTop:65, marginLeft: 10, fontWeight: '400', fontFamily: 'Helvetica Neue'}}> Near you </Text>

      {/* render location images */}

      <FlatList
        data={this.state.json}
      renderItem={({item}) => <LocationImage name={item.name} url={item.imageUrl} text={item.template.items[0].attributes.title} key={item._id} nav={this.props.navigation}/> }
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
    backgroundColor: '#DEDEDE',
  },
});
