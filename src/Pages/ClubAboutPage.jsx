import React from 'react'
import Navbar from '../Components/Navbar'
import styles from "../CSS/clubaboutpage.module.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import {ImLocation} from "react-icons/im";
import Footer from '../Components/Footer';
import {Flex,Input,Text,} from "@chakra-ui/react"
import {TbLocationFilled} from "react-icons/tb";
const ClubAboutPage = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.bardiv}>
          <input className={styles.searchbar} type="text" placeholder='Search...' />
          <div className={styles.bell}><IoIosNotificationsOutline/></div>
        </div>
        <div className={styles.middiv}>
            <div className={styles.AboutDetailsDiv}>
                <img className={styles.ClubImage}  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <h2>Lord of the Drinks Chamber</h2>
                <p><ImLocation/> 670.5 km away, Rajouri Garden Main Market, Rajouri Garden</p>
                <Flex>
                <TbLocationFilled/>
                <Text>Get Directions</Text>
                </Flex>
            </div>
            <div className={styles.BookingDetailsReserveNowDiv}></div>
        </div>
        <Footer/>
    </div>
  )
}

export default ClubAboutPage