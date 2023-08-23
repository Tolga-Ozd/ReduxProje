import React from 'react'
import TechItem from './TechItem'
import techItems from '../techItems'
import { useSelector } from 'react-redux'

const TechList = () => {

    const {cartItems,quantity , total } = useSelector((store)=>store.cart)

  return (
    <div>
        { quantity < 1 ? (
            <section>
                <header>
                    <h3>Ürün sepetiniz boş</h3>
                    </header>
            </section>           
        ) : (
            <section>
                <header>
                    <h3>Sepetim</h3>
                </header>
                <div>
                    {techItems.map((item) => {
                        return <TechItem {...item} />
                    })}
                </div>
                <footer>
                    <hr />
                    <div>
                        <h4>Toplam tutar <span> {total} ₺ </span> </h4>
                    </div>
                </footer>
                <button>Temizle</button>
            </section> 
        )}

    </div>
  )
}

export default TechList