import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { checkoutCartThunk, getCartThunk } from '../store/slices/cart.slice';

const Cart = ({ show, handleClose }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const cart = useSelector(state => state.cart);

  useEffect(() => {
    if(cart.length === 0) { 
    dispatch(getCartThunk())
    }
  }, [])

  return ( 

    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        
        {cart.map(product => (
          <li key={product.id} > 
            <Link to={`/product/${product.id}`} onClick={() => setShow(false)} >
              <h4>
                {product.title}
              </h4>
            </Link>
          <h5>{product.productsInCart.quantity}</h5>
                <h5>{Number(product.price)*product.productsInCart.quantity}</h5>
          </li>
        ))}
      <Button onClick={() => ( cart.length !== 0 && dispatch(checkoutCartThunk()), cart.length !== 0 && navigate('/purchases') ) } 
            style={{width:'100%'}} >
  
        Checkout
      </Button>
    </Offcanvas.Body>
    </Offcanvas >


  );
};

export default Cart;

