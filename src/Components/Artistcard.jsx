import React from 'react'
import styles from "../CSS/artistCard.module.css"
const Artistcard = ({image})=> {
  return (
    <div className={styles.carddiv}>
      <img className={styles.img} src={image} alt="" />
      <div className={styles.belowimg}>
      <div className={styles.type_meter}>
        <div>Musician/Band</div>
        <div className={styles.meter}></div>
      </div>
      <div className={styles.desc}>
        4 Piece Band Setup by Sanmeet a
      </div>
      <div className={styles.genre_book}>
        <div className={styles.genre}>
          <div>Bollywood</div>
          <div>Pop/Rock</div>
        </div>
        <button>Book Now</button>
      </div>
      </div>
      
    </div>
  )
}

export default Artistcard