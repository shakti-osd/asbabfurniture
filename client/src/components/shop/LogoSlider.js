import React from 'react'
import { NavLink } from 'react-router-dom'
import HorizontalGallery from 'react-dynamic-carousel'

function LogoSlider(props) {

const productItems = [
    {
        id:1,
        url:'images/brand/1.png'
    },
    {
        id:2,
        url:'images/brand/2.png'
    },
    {
        id:3,
        url:'images/brand/3.png'
    },
    {
        id:4,
        url:'images/brand/4.png'
    },
    {
        id:5,
        url:'images/brand/5.png'
    },
    {
        id:6,
        url:'images/brand/1.png'
    },
    {
        id:7,
        url:'images/brand/2.png'
    },
    {
        id:8,
        url:'images/brand/3.png'
    },
    {
        id:9,
        url:'images/brand/4.png'
    },
    {
        id:10,
        url:'images/brand/5.png'
    },
]
    return (
        <>

        <HorizontalGallery
            tiles={productItems.map((product) => (
                <li key={product.id}><NavLink to="#"><img src={product.url} alt="absas" /></NavLink></li>
            ))}
            elementWidth={200}
            fadeDistance={1}
            minPadding={5}
        />


           		        					 
        </>
    )
}


export default LogoSlider;