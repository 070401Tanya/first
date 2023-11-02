import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function Logo() {
    return (

        <Container className="logo-container">
            <Image src="logo.png" />
        </Container>

    );
}

export default Logo;
