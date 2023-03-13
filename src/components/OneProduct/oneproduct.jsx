import styles from './oneproduct.module.css'
import React from 'react'

const OneProduct = (props) => {

    return (
        <div className={styles.list}>
            {
                props.items.map(item => {
                    return (
                        <div key={item.id} className={styles.oneProduct}>
                            <div className={styles.image_div}>
                                <img src={item.images[0]} alt="" className={styles.product_image} />
                            </div>
                            <div className={styles.descrip}>
                                <div className={styles.item_desc}>
                                    <h3>{item.title}</h3>
                                    <h4>{item.description}<br />Brand:{item.brand}</h4>
                                </div>
                                <div className={styles.bottom_desc}>
                                    <div>
                                        <h5>Category:{item.category}</h5>
                                    </div>
                                    <div>
                                        <h5>Price:{item.price}€</h5>
                                    </div>
                                </div>
                            </div>


                        </div>
                    )
                })
            }
        </div>
    )
}

export default OneProduct