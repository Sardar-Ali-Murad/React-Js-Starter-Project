import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import Member1 from "./img/P1.jpg"
import Member2 from "./img/P1.jpg"
import Member3 from "./img/P3.webp"
import Member4 from "./img/P4.webp"
import Member5 from "./img/P5.jpg"
import Member6 from "./img/P6.jpeg"
import Member7 from "./img/P7.jpg"
import Member8 from "./img/P5.jpg"


export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]


export const team=[
  {
    img:Member1,
    name:"Sardar Ali",
    smallText:"@devpenzil",
    smallText2:"CEO",
    longText:'avid reader. Love to take a long walk, swim',
    phoneNo:'+923186881689',
    email:"sardar4@gmail.com"
  },
  {
    img:Member2,
    name:"Murad Ali",
    smallText:"@devpenzil",
    smallText2:"CEO",
    longText:'avid reader. Love to take a long walk, swim',
    phoneNo:'+923186881689',
    email:"sardar4@gmail.com"
  },
  {
    img:Member3,
    name:"Ahsan Ali",
    smallText:"@devpenzil",
    smallText2:"CEO",
    longText:'avid reader. Love to take a long walk, swim',
    phoneNo:'+923186881689',
    email:"sardar4@gmail.com"
  },
  {
    img:Member4,
    name:"Shabaz Ali",
    smallText:"@devpenzil",
    smallText2:"CEO",
    longText:'avid reader. Love to take a long walk, swim',
    phoneNo:'+923186881689',
    email:"sardar4@gmail.com"
  },
  {
    img:Member5,
    name:"Mazz Ali",
    smallText:"@devpenzil",
    smallText2:"CEO",
    longText:'avid reader. Love to take a long walk, swim',
    phoneNo:'+923186881689',
    email:"sardar4@gmail.com"
  },
  {
    img:Member6,
    name:"Rafay Ali",
    smallText:"@devpenzil",
    smallText2:"CEO",
    longText:'avid reader. Love to take a long walk, swim',
    phoneNo:'+923186881689',
    email:"sardar4@gmail.com"
  },
  {
    img:Member7,
    name:"Faisal Ali",
    smallText:"@devpenzil",
    smallText2:"CEO",
    longText:'avid reader. Love to take a long walk, swim',
    phoneNo:'+923186881689',
    email:"sardar4@gmail.com"
  },
  {
    img:Member8,
    name:"Naeem Ali",
    smallText:"@devpenzil",
    smallText2:"CEO",
    longText:'avid reader. Love to take a long walk, swim',
    phoneNo:'+923186881689',
    email:"sardar4@gmail.com"
  },

]
export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`

