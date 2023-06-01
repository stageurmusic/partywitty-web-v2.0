import React from 'react'
import Navbar from '../Components/Navbar'
import styles from "../CSS/dealsandoffers.module.css"
import { IoIosNotificationsOutline } from "react-icons/io";
import ImageSlider from '../Components/DealsSlider';
const DealsAndOffers = () => {
    let eventSliderArray=[
        "https://img.freepik.com/free-vector/music-frequency-edm-background-design_1017-33904.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-photo/people-celebrating-night_23-2147651886.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-photo/festive-men-women-party-together_23-2147651898.jpg?size=626&ext=jpg"
    ]
  return (
    <div>
        <Navbar/>
        <div className={styles.bardiv}>
          <input className={styles.searchbar} type="text" placeholder='Search...' />
          <div className={styles.bell}><IoIosNotificationsOutline/></div>
        </div>
        <h1 style={{color:"white",marginLeft:"1em"}}>Top Deals of the Day</h1>
        <ImageSlider images={eventSliderArray}/>
        <div  className={styles.deals}>
            <a href="">
              <img src="Images/event.png" alt="" />
              <p>Events</p>
            </a>
            <a href="">
              <img src="Images/fast-food.png" alt="" />
              <p>Club Deals</p>
            </a>
            <a href="">
              <img src="Images/food.png" alt="" />
              <p>Restaurant Deals</p>
            </a>
            <a href="">
              <img src="Images/liquor.png" alt="" />
              <p>Full Bottle Deals</p>
            </a>
            <a href="">
              <img src="Images/wall-clock.png" alt="" />
              <p>Jump Start Deals</p>
            </a>
            <a href="">
              <img src="Images/fish.png" alt="" />
              <p>Drink Like a Fish</p>
            </a>
            <a href="">
              <img src="Images/game-play.png" alt="" />
              <p>Gaming Zone</p>
            </a>
        </div>
    </div>
  )
}

export default DealsAndOffers