import React from 'react'
import Navbar from '../Components/Navbar'
import ImageSlider from '../Components/Slider'
import styles from "../CSS/events.module.css"
import Footer from '../Components/Footer'
import EventCard from '../Components/EventCard'
import React_calendar from '../Components/React_calendar'
import { Flex, Button } from "@chakra-ui/react";

const Events = () => {
    let eventSliderArray=[
        "https://img.freepik.com/free-vector/music-frequency-edm-background-design_1017-33904.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-photo/people-celebrating-night_23-2147651886.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-photo/festive-men-women-party-together_23-2147651898.jpg?size=626&ext=jpg"
    ]
    let [calendar,setCalendar]=React.useState(false)
    let [city,setCity]=React.useState(false)
    let [price,setPrice]=React.useState(false)
    let [music,setMusic]=React.useState(false)
    let [genres,setGenres]=React.useState(false)
    let [page,setPage]=React.useState(1)
    let [apidata,setApidata]=React.useState([]);
        const getdata=async(page)=>{
          let res=await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=12&_page=${page}`)
          let data=await res.json()
          console.log(data)
          setApidata(data)
        }
        const changePage=(changeby)=>{
          setPage(page+changeby)
        }
        React.useEffect(()=>{
          getdata(page)
        },[page])
  return (
    <div>
        <Navbar/>
        <ImageSlider images={eventSliderArray} />
        {/* search bar */}
        <input className={styles.searchbox} type="text" placeholder="Search.."/>
        {/* Event Mega Filter */}
        <div  className={styles.events}>
            <a href="">
              <img src="Images/confetti.png" alt="" />
              <p>All Events</p>
            </a>
            <a href="">
              <img src="Images/live-music.png" alt="" />
              <p>Live Music</p>
            </a>
            <a href="">
              <img src="Images/nightlife.png" alt="" />
              <p>Special Night</p>
            </a>
            <a href="">
              <img src="Images/dance-floor.png" alt="" />
              <p>Dance Floor</p>
            </a>
            <a href="">
              <img src="Images/fame.png" alt="" />
              <p>Celeb Night</p>
            </a>
            <a href="">
              <img src="Images/band.png" alt="" />
              <p>Band Night</p>
            </a>
        </div>
        {/* All events list grid and filters div */}
        <div className={styles.middiv_filters_events}>
          <div className={styles.filterdiv}>
            <div className={styles.calhead}>
              <div onClick={()=>{setCalendar(!calendar)}} className={styles.head}>Select Date <span className={styles.drop} >{calendar?"-":"+"}</span></div>
              {calendar?<React_calendar/>:""}
            </div>
            <div className={styles.cithead}>
              <div onClick={()=>{setCity(!city)}}className={styles.head}>Your City <span className={styles.drop} >{city?"-":"+"}</span></div>
              {city?<input className={styles.cityselector} type="text" placeholder='Search City of your choice'/>:""}
            </div>
            <div className={styles.prihead}>
              <div onClick={()=>{setPrice(!price)}} className={styles.head}>Price <span className={styles.drop} >{city?"-":"+"}</span></div>
            </div>
            <div className={styles.mushead}>
              <div onClick={()=>{setMusic(!music)}}className={styles.head}>Music Type <span className={styles.drop} >{music?"-":"+"}</span></div>
              {music?<div className={styles.musictype}>
                <p>Solo</p>
                <p>Duo</p>
                <p>Trio</p>
                <p>Full Band</p>
              </div>:""}
            </div>
            <div className={styles.gen}>
              <div onClick={()=>{setGenres(!genres)}} className={styles.head}>Genres <span className={styles.drop} >{genres?"-":"+"}</span></div>
              {genres?<div className={styles.genres}>
                <p>Rock</p>
                <p>Jazz</p>
                <p>Sufi</p>
                <p>Bollywood</p>
                <p>Western</p>
              </div>:""}
            </div>
          </div>
          <div className={styles.eventcardsdiv}>
          {apidata.map((el,i)=><EventCard key={el.id} image={el.thumbnailUrl}/>)}

          </div>
        </div>
        <Flex color={"white"} w="15em" justify={"space-between"} ButtonAlign={"center"} m="auto" mt="5em">
          <Button bgColor={"pink.400"} isDisabled={page===1}   onClick={()=>changePage(-1)}>Previous</Button>
          <Button bgColor={"pink.400"}>{page}</Button>
          <Button bgColor={"pink.400"} onClick={()=>changePage(1)}>Next</Button>
        </Flex>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Events; 