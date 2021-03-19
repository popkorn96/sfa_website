import React from 'react'
import { Switch, Route, Link, useParams, useRouteMatch, BrowserRouter as Router} from 'react-router-dom';
import AdminEdit from '../admin-components/AdminEdit';

export default function AdminRoutes() {
    return (
        <div>
            <Router>
                <Switch>
                    
                    <Route exact path="/admin-edit" component={AdminEdit} />
                </Switch>
            </Router>
        </div>
    )
}

                        
                        
                        
                        