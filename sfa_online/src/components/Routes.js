import React from 'react';
import { Switch, Route, Link, useParams, useRouteMatch, BrowserRouter as Router} from 'react-router-dom';
import AdminLogin from '../admin-components/AdminLogin';
import AdminEdit from '../admin-components/AdminEdit';
import EnHome from '../en-containers/EnHome';
import EnEvents from '../en-containers/EnEvents'
import EnGallery from '../en-containers/EnGallery';
import EnAboutUs from '../en-containers/EnAboutUs';
import SpPaginaPrincipal from '../sp-components/SpPaginaPrincipal';
import SpEventos from '../sp-components/SpEventos';
import SpGaleria from '../sp-components/SpGaleria';
import SpSobreNosotros from '../sp-components/SpSobreNosotros';
import EnDonations from '../en-containers/EnDonations';
import SpDonaciones from '../sp-components/SpDonaciones';


export default function Routes() {
    return (
        <Router>
            <Switch>
                    <div>
                        <Route exact path="/admin-login" component={AdminLogin} />
                        <Route exact path="/admin-edit" component={AdminEdit} />
                        <Route exact path="/en-home" component={EnHome} />
                        <Route path="/en-events" component={EnEvents} />
                        <Route exact path="/en-gallery" component={EnGallery} />
                        <Route exact path="/en-donations" components={EnDonations} />
                        <Route exact path="/en-about-us" component={EnAboutUs} />
                        <Route exact path="/sp-pagína-principal" component={SpPaginaPrincipal} />
                        <Route exact path="/sp-eventos" component={SpEventos} />
                        <Route exact path="/sp-galería" component={SpGaleria} />
                        <Route exact path="/en-donaciónes" component={SpDonaciones} />
                        <Route exact path="/sp-sobre-nosotros" component={SpSobreNosotros} />
                    </div>
                </Switch>
        </Router>
    )
}
// When a <Switch> is rendered, it searches through its children 
// <Route> elements to find one whose path matches the current URL. 
// When it finds one, it renders that <Route> and ignores all others.