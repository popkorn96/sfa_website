import React from 'react';
import Footer from './EnFooter';
import Announcements from '../components/Announcements';
import EnglishNavigationBar from '../components/EnNavBar';
import {Carousel} from 'react-bootstrap';

export default function EnHome() {
    
    return (
        <div id="page-container">
            <div id="content-wrap">
                <EnglishNavigationBar />
                <br/><h1>English Home</h1><br/>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./main-back5.png"
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
                        src="./IMG_1286.JPG"
                        alt="Second slide"
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
                <br/><Announcements/><br/>
                <Footer/>
            </div>
        </div>
    )
}
