import React from 'react';
import Anuncios from '../components/Announcements';
import { SpanishNavigationBar } from '../components/SpNavBar';

export default function SpSobreNosotros() {
    return (
        <div>
            <SpanishNavigationBar />
            <h1>Sobre Nosotros</h1>
            <Anuncios />
        </div>
    )
}
