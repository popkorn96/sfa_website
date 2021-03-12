import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Main from './Main';
import AdminLogin from './AdminLogin';
import AdminEdit from './AdminEdit';


export default function Routes() {
    return (
        <Switch>
            <div>
                {/* <Route exact path="/" component={Main} /> */}
                <Route exact path="/admin-login" component={AdminLogin} />
                <Route exact path="/admin-edit" component={} />
                <Route exact path="/en-home" component={} />
                <Route exact path="/en-events" component={} />
                <Route exact path="/en-gallery" component={} />
                <Route exact path="/en-about-us" component={} />
                <Route exact path="/sp-pagína-principal" component={} />
                <Route exact path="/sp-eventos" component={} />
                <Route exact path="/sp-galería" component={} />
                <Route exact path="/sp-sobre-nosotros" component={} />
            </div>
        </Switch>
    )
}
