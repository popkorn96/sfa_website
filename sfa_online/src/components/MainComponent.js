import React from 'react';
import Image from 'react-bootstrap/Image';
import EnFooter from '../en-containers/EnFooter';

export default function MainComponent() {
    return (
        <div>
            <div className="main-container">
                <Image src="./main-back5.png" fluid/>
                <EnFooter />
                <EnFooter
            </div>
        </div>
    )
}
