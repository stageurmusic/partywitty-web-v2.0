import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import RestaurantCard from '../Components/RestaurantCard'
import styles from "../CSS/bookatable.module.css" ;
import { IoIosNotificationsOutline } from "react-icons/io";
const BookATable = () => {
  let [calendar,setCalendar]=React.useState(false)
    let [city,setCity]=React.useState(false)
    let [price,setPrice]=React.useState(false)
    let [music,setMusic]=React.useState(false)
    let [genres,setGenres]=React.useState(false)
  return (
    
    <div>
        <Navbar/>
        <div className={styles.searchdiv_middlediv}>
        <div className={styles.bardiv}>
          <input className={styles.searchbar} type="text" placeholder='Search...' />
          <div className={styles.bell}><IoIosNotificationsOutline/></div>
        </div>
        <div className={styles.middiv_filters_rests}>
          <div className={styles.filtersDiv}>
            <div className={styles.calhead}>
              <div className={styles.head}>Quick Filters<span className={styles.selector} >-</span></div>
              <div className={styles.featuresdiv}>
                <select name="" id="" className={styles.feature_select}>
                  <option value="">Search</option>
                  <option value="PartyWitty Pay">PartyWitty Pay</option>
                  <option value="Pure Veg">Pure Veg</option>
                  <option value="5 Star">5 Star</option>
                  <option value="Buffet">Buffet</option>
                </select>
              </div>
            </div>
            <div className={styles.cithead}>
            <div className={styles.head}>Cuisines</div>
            <div className={styles.featuresdiv}>
                <select name="" id="" className={styles.feature_select}>
                  <option value="">Search</option>
                  <option value="North Indian">North Indian</option>
                  <option value="Fast Food">Fast Food</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Desserts">Desserts</option>
                </select>
            </div>
            </div>
            <div className={styles.prihead}>
              <div className={styles.head}>Tags</div>
              <div className={styles.featuresdiv}>
                <select name="" id="" className={styles.feature_select}>
                  <option value="">Search</option>
                  <option value="Casual Dining">Casual Dining</option>
                  <option value="Cafe">Cafe</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Bakery">Bakery</option>
                </select>
              </div>
            </div>
            <div className={styles.mushead}>
              <div className={styles.head}>Features</div>
              <div className={styles.featuresdiv}>
                <select name="" id="" className={styles.feature_select}>
                  <option value="">Search</option>
                  <option value="Cards Accepted">Cards Accepted</option>
                  <option value="Wallet Accepted">Wallet Accepted</option>
                  <option value="Home Delivery">Home Delivery</option>
                  <option value="Air Conditioned">Air Conditioned</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.restaurants}>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default BookATable