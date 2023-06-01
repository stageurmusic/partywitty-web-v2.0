import React from 'react'
import {GoLocation} from "react-icons/go";
import {IoPricetagsOutline} from "react-icons/io5";
import styles from "../CSS/resCard.module.css"
const RestaurantCard = () => {
  return (
    <a href="./club_about_page" className={styles.resCardDiv}>
        <img className={styles.resCardImage} src="https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <h4 style={{color:"white"}}>Castle Barbeque</h4>
        <p style={{color:"white"}}><GoLocation/>Delhi Aerocity, Aerocity</p>
        <p style={{color:"#8c1b34"}}><IoPricetagsOutline/>50%</p>
    </a>
  )
}

export default RestaurantCard;