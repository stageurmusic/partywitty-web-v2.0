import React from 'react'
import styles from "../CSS/eventcard.module.css"
import {SlCalender} from "react-icons/sl"
import {AiOutlineClockCircle} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
const EventCard = ({image}) => {
  return (
    <div className={styles.eventscard}>
        <img className={styles.eventpic} src={image} alt="" />
        <div className={styles.descdiv}>
            <h4> Piece Band Setup by 
 Sanmeet a</h4>
            <p className={styles.reddateandredtime}><SlCalender/> Mon 14/08/2023</p>
            <p className={styles.reddateandredtime}><AiOutlineClockCircle/> 12 PM - 4 PM</p>
            <div className={styles.genrediv}>
                <p>Bollywood</p>
                <p>Pop/Rock</p>
            </div>
            <p><GoLocation/> California, CA</p>
            <p>Dummy Description</p>
            <button>Book Now</button>

        </div>
    </div>
  )
}

export default EventCard