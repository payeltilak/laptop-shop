import React from 'react';
import { Card } from 'react-bootstrap';

const Customer = ({ review }) => {
    const { name, rating, picture, comments, gender } = review;
    return (
        <div className='col-md-4 col-sm-6 p-4 ml-4 '>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4>{comments}</h4>
                    <h5>{rating}</h5>
                    <h3>{gender}</h3>


                </Card.Body>
            </Card>
        </div>
    );
};

export default Customer;