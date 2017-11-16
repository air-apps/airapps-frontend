import React from 'react'
import {Button} from 'react-native'

export const insertJsx = (jsx) => {
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
