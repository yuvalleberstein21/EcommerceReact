import React from 'react'
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import { LinkContainer } from 'react-router-bootstrap';
import categories from '../Categories';
import Col from 'react-bootstrap/esm/Col';
import './Home.css'


const Home = () => {
    return (
        <div>
            <img src='https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png' className='home-banner' />
            <div className='featured-products-container container mt-4'>
                <h2>Last products</h2>
                {/* Last products here */}
            </div>
            <div>
                <Link to='/category/all' style={{ textAlign: 'right', display: 'block', textDecoration: 'none' }}>See more {">>"}</Link>
            </div>
            {/* Sale Banner */}
            <div className='sale__banner--container mt-4'>
                <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" alt="image banner" />
            </div>
            <div className='recent-products-container container mt-4'>
                <h2>Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: '10px' }} className='category-tile'>
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Home