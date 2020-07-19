import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/CartSelectors';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => (<CartItem id={cartItem.id} item={cartItem} />))
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps, null)(CartDropdown);