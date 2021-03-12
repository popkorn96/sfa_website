import React from 'react';
import { Switch, Route, Router} from 'react-router-dom';
import Main from './Main';
import AdminLogin from './AdminLogin';
import AdminEdit from './AdminEdit';
import EnHome from '../en-containers/EnHome';
import EnEvents from '../en-containers/EnEvents'
import EnGallery from '../en-containers/EnGallery';
import EnAboutUs from '../en-containers/EnAboutUs';


export default function Routes() {
    return (
        <Router>
            <Switch>
                    <div>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/admin-login" component={AdminLogin} />
                        <Route exact path="/admin-edit" component={AdminEdit} />
                        <Route exact path="/en-home" component={EnHome} />
                        <Route exact path="/en-events" component={EnEvents} />
                        <Route exact path="/en-gallery" component={EnGallery} />
                        <Route exact path="/en-about-us" component={EnAboutUs} />
                        <Route exact path="/sp-pagína-principal" component={} />
                        <Route exact path="/sp-eventos" component={} />
                        <Route exact path="/sp-galería" component={} />
                        <Route exact path="/sp-sobre-nosotros" component={} />
                    </div>
                </Switch>
        </Router>
    )
}
