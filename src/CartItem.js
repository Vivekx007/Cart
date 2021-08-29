import React from 'react';

class CartItem extends React.Component {


    increaseQuantity = () =>{
        // this.state.qty +=1;
        // console.log('this',this.state); 

//---------------------------------------------------setState form 1------------------------

        // this.setState(
        //     {
        //         qty: this.state.qty + 1
        //     }
        // );

//----------------------------------------------------setState form 2----------------------------------------------------
        this.setState((prevState) =>{
            return {
                qty: prevState.qty + 1,
            }
        });
    }

    decreaseQuantity = () =>{
        if(this.state.qty===0){
            return;
        }

        this.setState((prevState) =>{
            return {
                qty: prevState.qty - 1,
            }
        })
    }

    render() {
        console.log('this.props',  this.props)
        const {price, title, qty} = this.props.product;
        return (
            
            <div className="cart-item">
                 {this.props.jsx}
                <div className="left-block">
                    <img style = {styles.image}/>
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
                         onClick={this.increaseQuantity}
                         />

                        <img alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/1828/1828906.png" 
                        onClick={this.decreaseQuantity}
                        />

                        <img alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/3096/3096673.png" />
                    </div>
                </div>
            </div>
        )
    }
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