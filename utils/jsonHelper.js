import React from 'react'
import {Button} from 'react-native'

export const parseJson = (json) => {
     return Object.keys(json.items).map((index) => {
       const item = json.items[index]
       switch (item.type){
         case 'button': 
           return (<Button title={item.attributes.title} color={item.attributes.color} />)
         default:
           return 
       }
      })
    }
