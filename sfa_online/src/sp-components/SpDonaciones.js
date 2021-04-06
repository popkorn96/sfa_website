import React from 'react';
import Anuncios from '../components/Announcements';
import { SpanishNavigationBar } from '../components/SpNavBar';

export default function SpDonaciones() {
    return (
        <div>
            <SpanishNavigationBar />
            <h1>Donaciónes</h1>
            <Anuncios />
        </div>
    )
}
