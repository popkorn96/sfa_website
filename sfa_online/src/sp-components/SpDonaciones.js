import React from 'react';
import Anuncios from '../components/Announcements';
import { SpanishNavigationBar } from '../components/SpNavBar';
import SpFooter from './SpFooter';

export default function SpDonaciones() {
    return (
        <div id="page-container">
            <div id="content-wrap">
                <SpanishNavigationBar />
                <h1>Donaciónes</h1>
                <a href="https://onrealm.org/SFADALLAS/-/give/now">Donar Ahora</a>
                <Anuncios />
                <SpFooter />
            </div>
        </div>
    );
};
