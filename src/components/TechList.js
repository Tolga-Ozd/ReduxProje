import React from 'react'
import TechItem from './TechItem'
// import techItems from '../techItems'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../control/cartSlice'

function TechList() {

    const dispatch = useDispatch();
    const {cartItems ,quantity , total } = useSelector((store)=>store.cart)

  return (
    <div>
        { quantity < 1 ? (
            <section className='carttt'>
                <header>
                    <h3 className='empty'>Ürün sepetiniz boş!</h3>
                    </header>
            </section>           
        ) : (
            <section className='carttt'>
                <header>
                    <h1 className='baslık'>Ürün Sepetim</h1>
                </header>
                <div>
                    {cartItems.map((item) => {
                        return <TechItem key={item.id} {...item} />
                    })}
                </div>
                <footer>
                    <hr />
                    <div>
                        <h2>Toplam tutar <span> {total} ₺ </span> </h2>
                       
                    </div>
                </footer>
                <button className='clear'
                onClick={() => dispatch(clearCart())}
                >Temizle</button>
            </section> 
        )}
    </div>
  )
}

export default TechList