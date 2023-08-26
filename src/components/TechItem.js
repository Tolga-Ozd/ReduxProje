import React from 'react'
import {BsChevronUp , BsChevronDown} from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { removeItem ,increase , decrease } from '../control/cartSlice';

function TechItem ({id , title , price , img, quantity}) {

const dispatch = useDispatch();
    
  return (
    <div className='techItem'>
        <img src={img} alt="" className='img' />
        
        <div className='techInfo'> 
            <h4 className='techTitle'>{title}</h4>
            <h4 className='iiii'>{price} ₺</h4>
            <div>
                <button className='techButton iiii' onClick={()=>{dispatch(increase(id))}} > 
                    <BsChevronUp />     
                </button>
                <p className='techquantity iiii'>{quantity}</p>
                <button className='techButton iiii' onClick={()=>{dispatch(decrease(id))}}>
                    <BsChevronDown />
                </button>
            </div> 
            <button className='techDelete iiii' 
            onClick={() =>dispatch(removeItem(id))}
            >Sil</button>
        </div>
    </div>
  )
}

export default TechItem