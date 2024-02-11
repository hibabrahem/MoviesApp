import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieItem({ list }) {
    return (
<div>
        <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: "200px" }} variant="top" src={list.img} />
            <Card.Body>
                <Card.Title>{list.title}</Card.Title>
                <Card.Text>
                    {list.genre}
                </Card.Text>
                <Button variant="primary">{list.rate}⭐</Button>
            </Card.Body>
        </Card>
        
        </div>
    );
}

export default MovieItem;
