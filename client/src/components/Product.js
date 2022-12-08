import React from 'react'

const Product = () => {
    return (
        <div className='item'>
            <div className='image'>
                <img src='images/products/image-aqua.png' />
            </div>
            <div className='middle aligned content'>
                <div className='description'>
                    <a>Fort Knight</a>
                    <p>Authentic renaissance actors, delivered in just two week\
                        s.</p>
                </div>
                <div className='extra'>
                    <span>Submitted by:</span>
                    <img
                        className='ui avatar image'
                        src='images/avatars/daniel.jpg'
                    />
                </div>
            </div>
        </div>
    );
}

export default Product;