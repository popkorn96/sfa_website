import React from 'react';
import Anuncios from '../components/Announcements';
import { SpanishNavigationBar } from '../components/SpNavBar';

export default function SpEventos() {
    return (
        <div>
            <SpanishNavigationBar />
            <h1>Eventos</h1>
            <Anuncios />
        </div>
    )
}
