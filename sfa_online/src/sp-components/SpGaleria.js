import React from 'react';
import Anuncios from '../components/Announcements';
import { SpanishNavigationBar } from '../components/SpNavBar';
import SpFooter from './SpFooter';

export default function SpGaleria() {
    return (
        <div>
            <SpanishNavigationBar />
            <h1>Galeria</h1>
            <Anuncios />
            <SpFooter />
        </div>
    )
}
