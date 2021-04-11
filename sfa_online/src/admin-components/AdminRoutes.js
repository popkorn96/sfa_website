import React from 'react'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import AdminEdit from './AdminEdit';

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

                        
                        
                        
                        