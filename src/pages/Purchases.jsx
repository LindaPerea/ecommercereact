import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const purchases = useSelector(state => state.purchases);

    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, []);

    return (
        <div>
            <h2>pruchases hello</h2>
            <ListGroup>
                {purchases.map(purchase => (
                    <ul >
                        {purchase.cart.products.map(product => (
                            <li >

                                {product.title}
                                {product.price}
                                {product.createdAt}

                            </li>
                        ))}
                    </ul>


                ))}
            </ListGroup>
        </div>
    );
};

export default Purchases;