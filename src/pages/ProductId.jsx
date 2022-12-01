import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { createCartThunk } from '../store/slices/cart.slice';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductId = () => {

    const { id } = useParams()

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getProductsThunk());
    }, [])

    const newsProducts = useSelector(state => state.products)

    const productsFound = newsProducts.find(news => news.id === Number(id))

    const productsRelated = newsProducts.filter(news =>
        news.category.id === productsFound.category.id);

        const [ quantity, setQuantity ] = useState("");
        
        const addToCart = () => {
            const productToCart = {
                id: productsFound.id,
                quantity: quantity
            }

            dispatch(createCartThunk(productToCart))
    
        }

        // console.log(productToCart);

    console.log(productsRelated);
    // https://e-commerce-api.academlo.tech/api/v1/cart
    return (
        <div>
            <h2>{productsFound?.title}</h2>
            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <Button onClick={addToCart} >Add to Cart</Button>
            <Row>
                <Col>
                    <img src={productsFound.productImgs[0]} alt="" />

                </Col>
                <Col><p>{productsFound.description}</p></Col>
            </Row>

            <h3>Products Related:</h3>

            <Row xs={1} md={2} lg={3} className="g-4">
            {productsRelated.map(news => (
                    <Col>
                        <Card  >
                        <Link to={`/products/${news?.id}`} style={{textDecoration: "none"}} >
                        <Card.Title>{news.title}</Card.Title>
                            <Card.Img 
                                variant="top" 
                                src={news.productImgs[0]} 
                                style={{height: 200, objectFit: "contain"}}
                            />
                            <Card.Body>
                                
                                <Card.Text>
                                    S/. {news.price}
                                </Card.Text>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    );
};

export default ProductId;

