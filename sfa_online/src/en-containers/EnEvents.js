import React from 'react';


export default function EnEvents() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h1>English Events</h1>
            <h2><a href={`${url}/rendering`}></a></h2>
        </div>
    )
}
