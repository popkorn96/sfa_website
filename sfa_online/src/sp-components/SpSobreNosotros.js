import React from 'react';
import Anuncios from '../components/Announcements';
import { SpanishNavigationBar } from '../components/SpNavBar';
import SpFooter from './SpFooter';
import Container from 'react-bootstrap/Container';

export default function SpSobreNosotros() {
    return (
        <div id="page-container">
            <div id="content-wrap">
                <SpanishNavigationBar />
                <h1>Quienes Somos</h1>

                <Container>
                    <i><p>Los episcopales creemos en un Dios amoroso, liberador y vivificante; Padre, Hijo y Espíritu Santo. <br/>
                    Como moembros constitutivos de la Cominión Anglicana en Estados Unidos, como descendientes y nos asociamos <br/>
                    a la iglesia de Inglaterra y a la Iglesia Episcopal Escocesa, y somos parte del tercer grupo mas grande de cristianos en el mundo.<br/><br/>
                    Creemos en seguir las enseñanzas de Jesucristo, cuya vida, muerte y resurección salvó al mundo.<br/><br/>
                    Tenemos yn legado de inclusion en el cual, aspirando a dar a conocer y a ejemplificar el amor De Dios a todo ser humano; <br/>
                    hombres y mujeres sirven como obispos, sacerdotes y diáconos en nuestra iglesia. Los laicos y el clero <br/>
                    comparten el liderazgo a todos los niveles en nuestra iglesia. El liderazgo es un don de Dios, y puede ser <br/>
                    manifestado por todas las personas de nuestra Iglesia, independiente de su identidad u orientación sexual. <br/>
                    Creemos que Dios nos ama a todos, sin excepción. 
                    </p></i>
                </Container>
                <Anuncios />
                <SpFooter />
        
            </div>
        </div>
    )
}
