import React from 'react'
import {Button} from 'react-native'
import {List} from '../Components/List';
import Heading from '../Components/Heading'

export const parseJson = (json) => {
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
         default:
           return 
       }
      })
    }
