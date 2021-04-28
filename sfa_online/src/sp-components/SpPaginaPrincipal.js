import React from 'react';
import Anuncios from '../components/Anuncios';
import {Carousel} from 'react-bootstrap';
import { SpanishNavigationBar } from '../components/SpNavBar';
import SpFooter from './SpFooter';

export default function SpPaginaPrincipal() {
    return (
        <div id="page-container">
            <div id="content-wrap">
                <SpanishNavigationBar />
                <br/><h1>Pagina Principal</h1><br/>
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
                        src="./home2.png"
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
                        src="./home1.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    <br/>
                <Anuncios /><br/>
                <SpFooter />
            </div>
        </div>
    );
};
