import React from 'react'

export default function AdminRoutes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/admin-login" component={AdminLogin} />
                    <Route exact path="/admin-edit" component={AdminEdit} />
                </Switch>
            </Router>
        </div>
    )
}

                        
                        
                        
                        