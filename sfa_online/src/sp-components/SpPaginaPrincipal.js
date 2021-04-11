import React from 'react';
import Anuncios from '../components/Anuncios';
import { SpanishNavigationBar } from '../components/SpNavBar';
import SpFooter from './SpFooter';

export default function SpPaginaPrincipal() {
    return (
        <div>
            <SpanishNavigationBar />
            <h1>Pagina Principal</h1>
            <Anuncios />
            <SpFooter />
        </div>
    )
}
