import React from 'react';
import CartItem from './CartItem';

const Cart = (props) =>  {

        const {products} = props;
        return(
            <div className="cart">
                {/* <CartItem qty={1} price={99} title={"watch"} img={''} /> */}
                {products.map((product )=>{
                    return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    // onIncreaseQuantity={this.handleIncreaseQuantity}
                    // onDecreaseQuantity={this.handleDecreaseQuantity}
                    // onDeleteProduct={this.handleDeleteProduct}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}
                    />
                    )
                })}
                
                </div>
        );
    
}




export default Cart;