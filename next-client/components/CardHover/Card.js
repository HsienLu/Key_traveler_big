import React from 'react'
import styles from './card.module.css'

export default function Card({ title, brand, price, imagePath }) {
  // 截斷過長的文字
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text
    } else {
      return text.substring(0, maxLength) + '...'
    }
  }

  return (
    <div className={`card h-auto ${styles['card']}`}>
      <img
        src={imagePath}
        className={`card-img-top ${styles.cardImg}`}
        alt="Product"
      />
      <div className="card-body w-100 position-relative">
        <h4 className="card-title">{title}</h4>
        <h6 className="card-title text-black-50">{brand}</h6>
        <h5 className="card-title">$ {price}</h5>
        <button
          className={`d-sm-none d-block bg-white border border-2 border-primary rounded-circle ${styles['cartBtn']}`}
        >
          <i className="fa-solid fa-cart-shopping fa-xl text-secondary"></i>
        </button>
      </div>
      <div className={`d-flex flex-column gap-3 ${styles['info']}`}>
        <button className={styles['infoBtn1']}>加入購物車</button>
        <button className={styles['infoBtn2']}>
          <i className="fa-regular fa-heart"></i> Like
        </button>
        <button className={styles['infoBtn3']}>
          <i className="fa-solid fa-angles-right"></i> Learn More
        </button>
      </div>
    </div>
  )
}
