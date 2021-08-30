import React from 'react';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state = { 
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img:  'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img:  'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img:  'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id: 3
            }
        ]
        
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
}
handleIncreaseQuantity = (product) =>{
    console.log('Heyy Please increase the qty of', product);
    const{products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
    })
    }

    handleDecreaseQuantity = (product) => {

        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty===0){
            return;
        }

        products[index].qty -= 1;
        
        this.setState({
            products: products
        })
    }

    handleDeleteProduct = (id) => {
        const{products} = this.state;

        const items = products.filter((item) => item.id !==id) // [{}]

        this.setState({
            products: items
        })
    }

    getCartCount = () => {
      const {products} = this.state;

      let count = 0;
      products.forEach((product)=>{
        count += product.qty;
      })
      return count;
    }

    getCartTotal = () => {
      const {products} = this.state;

      let cartTotal = 0;
      products.map((product)=>{
        cartTotal += product.qty * product.price 
      })
      return cartTotal;
    }


  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
           onIncreaseQuantity={this.handleIncreaseQuantity}
           onDecreaseQuantity={this.handleDecreaseQuantity}
           onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 30, fontSize:20,}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
