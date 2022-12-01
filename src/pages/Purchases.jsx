import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const purchases = useSelector(state => state.purchases);

    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, []);

    return (
        <div className='container-product-found'>
            <h2>Purchases </h2>
            <ListGroup>
                {purchases.map(purchase => (
                    <li key={purchase.createdAt} > 
                    <h2>{purchase.createdAt}</h2>
                    <ul  >
                        {purchase.cart.products.map(product => (
                            <li key={product.id}>
                                <Link to={`/products/${product?.id}`}>
                                    {product.title}
                                    {product.productsInCart.quantity}
                                   
                                </Link>


                            </li>
                        ))}
                    </ul>
                    </li>


                ))}
            </ListGroup>
        </div>
    );
};

export default Purchases;