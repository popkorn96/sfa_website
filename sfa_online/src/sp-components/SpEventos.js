import React from 'react';
import Anuncios from '../components/Announcements';
import { SpanishNavigationBar } from '../components/SpNavBar';
import SpFooter from './SpFooter';

export default function SpEventos() {
    return (
        <div id="page-container">
            <div id="content-wrap">
                <SpanishNavigationBar />
                <h1>Eventos</h1>
                <p>Run all translations through official translator</p>

                <Anuncios />
                <SpFooter />
            </div>
        </div>
    );
};