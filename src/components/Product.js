import React, { useState } from 'react';
import IMG from '../assets/img.jpg';
import '../components/Product.css';
import axios from 'axios';

function Product() {
    const [quote, setQuote] = useState('')
    const getQuote = () => {
        axios.get('https://api.quotable.io/random')
        .then(res => {
            setQuote(res.data.content)
            console.log(res.data.content)
        }).catch(err => {
            console.log(err)
        })
    }
  return (
    <div className='content'>
        <img className='img' src={IMG} alt="" />
      <h1 className='h1'>DAILY MOTIVATIONAL QUOTES</h1>
        <div className='main'>
        <button onClick={getQuote} className='button'>GET QUOTES</button>
        </div>
        { quote && <p className='main-p'> { quote } </p> }
        
      
    </div>
  )
}

export default Product

