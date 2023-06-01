import React from 'react'
import Calendar from "react-calendar";
import styles from "../CSS/calendar.module.css"
import 'react-calendar/dist/Calendar.css';
const React_calendar = () => {
  const [date,setDate]=React.useState(new Date());
  const onChange=date=>{
    setDate(date)
  }
  return(
    <div className={styles.caldiv}>
      <Calendar className={styles.cal} onChange={onChange} value={date}/>
      {console.log(date)}
    </div>
  )
} 
export default React_calendar;