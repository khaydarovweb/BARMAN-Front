import React, { Component } from 'react';
import { default as Header } from '../home/header';
import './cart.css';

interface Product {
    name: string;
    price: number;
}

interface CartPageState {
    quantity: number;
    totalPrice: number;
    products: Product[];
    promoCode: string;
}

export default class CartPage extends Component<{}, CartPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            quantity: 1,
            totalPrice: 30.99,
            products: [
                { name: 'Modern Poster', price: 30.99 } 
            ],
            promoCode: '',
        };
    }

    handleIncrement = () => {
        this.setState(prevState => ({
            quantity: prevState.quantity + 1,
            totalPrice: (prevState.quantity + 1) * prevState.products[0].price 
        }));
    };

    handleDecrement = () => {
        if (this.state.quantity > 1) {
            this.setState(prevState => ({
                quantity: prevState.quantity - 1,
                totalPrice: (prevState.quantity - 1) * prevState.products[0].price 
            }));
        }
    };

    handleAddPromo = () => {
        if (this.state.promoCode === '50promo') {
            const discount = this.state.totalPrice * 0.1; 
            this.setState(prevState => ({
                totalPrice: prevState.totalPrice - discount,
            }));
			
        }
    };

    handlePromoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ promoCode: event.target.value });
    };

    render() {
        return (
            <>
                <Header />
                <div className='box'>
                    <div className='h5la'>
                        <h5>Item</h5>
                        <h5>Price</h5>
                        <h5>Quantity</h5>
                        <h5>Subtotal</h5>
                    </div>
                    <div className='product'>
                        {this.state.products.map(product => (
                            <div className='productt2' key={product.name}>
                                <div className='rasm'></div>
                                <div>
                                    <h5>{product.name}</h5>
                                    <p>Color :</p>
                                </div>
                                <div className='pla'>
                                    <p>${product.price}</p>
                                    <div className='plusminus'>
                                        <p className='minus' onClick={this.handleDecrement}>-</p>
                                        <h1>{this.state.quantity}</h1>
                                        <p className='plus' onClick={this.handleIncrement}>+</p>
                                    </div>
                                    <p>${this.state.totalPrice.toFixed(2)}</p>
                                    <button className='delb'>Del</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='buttons'>
                        <button className='cont'>Continue Shopping</button>
                        <button className='clear'>Clear Shopping Cart</button>
                    </div>
                    <div className='promooo'>
                        <div className='checkandbutton'>
                            <div className='check'>
                                <div className='texts'>
                                    <div className='text1'>
                                        <p className='sub'>Subtotal</p>
                                        <p>${this.state.totalPrice.toFixed(2)}</p>
                                    </div>
                                    {/* Diğer fiyatlar buraya eklenebilir */}
                                </div>
                                <div className='ordert'>
                                    <p className='orderr'>Order Total:</p>
                                    <p>${this.state.totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                            <button className='login'>Log in</button>
                        </div>
                        <div className='promokodl'>
                            <h2>Write a promo code and get a discount !</h2>
                            <input
                                type="text"
                                placeholder='Promo'
                                value={this.state.promoCode}
                                onChange={this.handlePromoChange}
                            />
                            <button className='addbtn' onClick={this.handleAddPromo}>Add</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


