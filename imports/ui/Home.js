import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";
const images = [
    {
        original: '/assets/gal1.jpg',
        thumbnail: '/assets/gal1.jpg',
      },
  {
    
    original: '/assets/gal2.jpg',
    thumbnail: '/assets/gal2.jpg',
  },
  {
    original: '/assets/gal3.jpg',
    thumbnail: '/assets/gal3.jpg',
  },
  {
    original: '/assets/gal4.jpg',
    thumbnail: '/assets/gal4.jpg',
  },
];



class Home extends Component {

    render() {
        return (
            <div>              
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                Home
                {/*console.log(Meteor.users.find({}))*/}
                <ul>
                {Meteor.users.find({}).map(u => <li key={u._id}>{u.username}</li>)}
                    
                </ul>
                <ImageGallery items={images} />
            </div>
        )
    }
}

export default Home;
