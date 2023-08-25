import React from 'react'
import {BsChevronUp , BsChevronDown} from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { removeItem } from '../control/cartSlice';

function TechItem ({id , title , price , img, quantity}) {

const dispatch = useDispatch();
    
  return (
    <div className='techItem'>
        <img src={img} alt="" className='img' />
        
        <div className='techInfo'> 
            <h4>{title}</h4>
            <h4>{price} ₺</h4>
            <div>
                <button className='techButton'>
                    <BsChevronUp />     
                </button>
                <p className='techquantity'>{quantity}</p>
                <button className='techButton'>
                    <BsChevronDown />
                </button>
            </div> 
            <button className='techDelete' 
            onClick={() =>dispatch(removeItem(id))}
            >Sil</button>
        </div>
    </div>
  )
}

export default TechItem