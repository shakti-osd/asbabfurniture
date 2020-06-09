import React from 'react'
import { NavLink } from 'react-router-dom'
import HorizontalGallery from 'react-dynamic-carousel'

function TestimonialSlider(props) {

const testimonialItems = [
    {
        id:1,
        url:'images/client/1.jpg',
        name:"Mr.Mike Band",
        message:"I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success."
    },
    {
        id:2,
        url:'images/client/2.jpg',
        name:"Ms.Lucy Barton",
        message:"I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success."
    },
    {
        id:3,
        url:'images/client/1.jpg',
        name:"Mr.Mike Band",
        message:"I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success."
    },
    {
        id:4,
        url:'images/client/2.jpg',
        name:"Ms.Lucy Barton",
        message:"I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success."
    },
    {
        id:5,
        url:'images/client/1.jpg',
        name:"Mr.Mike Band",
        message:"I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success."
    }
    
]
    return (
        <>

        <HorizontalGallery
            tiles={testimonialItems.map((testimonial) => (
                <div className="col-lg-12 col-md-12 single__tes" key={testimonial.id}>
                            <div className="testimonial">
                                <div className="testimonial__thumb">
                                    <img src={testimonial.url} alt={testimonial.name} />
                                </div>
                                <div className="testimonial__details">
                                    <h4><NavLink to="#">{testimonial.name}</NavLink></h4>
                                    <p>{testimonial.message} </p>
                                </div>
                            </div>
                        </div>
            ))}
            elementWidth={500}
            fadeDistance={5}
            minPadding={1}
        />


           		        					 
        </>
    )
}


export default TestimonialSlider;