import React from 'react'
import {Button} from 'react-native'
import {List} from '../Components/List';
import Heading from '../Components/Heading'
import Hero from '../Components/Hero'

export const parseJson = (json, navigation) => {
     return Object.keys(json.items).map((index) => {
       const item = json.items[index]
       switch (item.type){
        case 'heading':
           return (<Heading 
            title={item.attributes.title}/>
           )
         case 'button': 
           return (<Button title={item.attributes.title} color={item.attributes.color} />)
        case 'list': 
          return (<List listitems={item.attributes} />)
        case 'header':
           return (      <Hero 
            nav={navigation}
            title={item.attributes.title} 
            tag={item.attributes.tag}
            location={item.attributes.location}
            imageUrl={item.attributes.imageUrl}
          />)
         default:
           return 
       }
      })
    }

export const safeGet = ( fn, returnVal  ) => {
  try {
    return fn()
  } catch (e) {
    return returnVal
  }
}
