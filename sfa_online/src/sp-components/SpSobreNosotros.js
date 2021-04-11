import React from 'react';
import Anuncios from '../components/Announcements';
import { SpanishNavigationBar } from '../components/SpNavBar';
import SpFooter from './SpFooter';

export default function SpSobreNosotros() {
    return (
        <div id="page-container">
            <div id="content-wrap">
                <SpanishNavigationBar />
                <h1>Sobre Nosotros</h1>
                <Anuncios />
                <SpFooter />
        
            </div>
        </div>
    )
}
