import React from 'react';

const CartItem = (props) => {


//     increaseQuantity = () =>{
//         this.state.qty +=1;
//         console.log('this',this.state); 

// ---------------------------------------------------setState form 1------------------------

//         this.setState(
//             {
//                 qty: this.state.qty + 1
//             }
//         );

// ----------------------------------------------------setState form 2----------------------------------------------------
//         this.setState((prevState) =>{
//             return {
//                 qty: prevState.qty + 1,
//             }
//         });
//     }

//     decreaseQuantity = () =>{
//         if(this.state.qty===0){
//             return;
//         }

//         this.setState((prevState) =>{
//             return {
//                 qty: prevState.qty - 1,
//             }
//         })
//     }

    
        const {price, title, qty} = props.product;
        const {
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct
        } = props;
        return (
            
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image} src={product.img} alt="" />
                </div>
                <div className="right-block">
                    <div style={ {fontSize:25}}>{title}</div>
                    <div style={ {color:'#777'}}>Rs: {price}</div>
                    <div style={ {color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img alt="increase"
                         className="action-icons" 
                         src="https://image.flaticon.com/icons/png/512/1828/1828926.png" 
                        //  onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                        onClick={()=>onIncreaseQuantity(product)}
                         />

                        <img alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/1828/1828906.png" 
                        // onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
                        onClick={()=>onDecreaseQuantity(product)}
                        />

                        <img alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/3096/3096673.png" 
                        onClick={()=>onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        )
    }

const styles = {
    image: {
        height:115,
        width:115,
        borderRadius:4,
        background:'#ccc'
    }
}


export default CartItem;