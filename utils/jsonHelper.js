import React from 'react'
import {Button} from 'react-native'
import {List} from '../Components/List';
import Heading from '../Components/Heading'
import Hero from '../Components/Hero'
import {Loyalty} from '../Components/Loyalty';
import {CouponQRCode} from '../Components/CouponQRCode'
import LotsOfItems from '../Components/LotsOfItems.js'

export const parseJson = (json, navigation) => {
     return Object.keys(json.template.items).map((index) => {
       const item = json.template.items[index]
       switch (item.type){
        case 'heading':
           return (<Heading 
            title={item.attributes.title}/>
           )
         case 'button': 
           return (<Button title={item.attributes.title} color={item.attributes.color} />)
        case 'list': 
          return (<List listitems={item.attributes} />)
        case 'loyalty': 
          return (<Loyalty title={item.attributes.title} value={item.attributes.value} />)
        case 'coupon': 
           const { title, description, imageURL } = item.attributes
           return (<CouponQRCode title={title} description={description} imageURL={imageURL} />)
        case 'header':
           return (      <Hero 
            nav={navigation}
            title={item.attributes.title} 
            tag={item.attributes.tag}
            location={item.attributes.location}
            imageUrl={item.attributes.imageUrl}
          />)
        case 'products':
           console.log('apple')
           return ( <LotsOfItems
             products={item.attributes}
             />)
         default:
           return 
       }
      })
    }
