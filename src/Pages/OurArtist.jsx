import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import ImageSlider from "../Components/Slider";
import styles from "../CSS/ourartist.module.css";
import Artistcard from "../Components/Artistcard";
import Footer from "../Components/Footer";
import { Flex, Button } from "@chakra-ui/react";
// require("dotenv").config()
const OurArtist = () => {
  let images = [
    "https://img.freepik.com/free-psd/house-music-ad-template-banner_23-2148754351.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-psd/dust-concept-banner-template_23-2148744932.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-psd/horizontal-banner-template-techno-music-night-party_23-2148815175.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-psd/music-festival-banner-template_23-2148911140.jpg?size=626&ext=jpg",
  ];

  let [sort, setSort] = React.useState(false);
  let [city, setCity] = React.useState(false);
  let [price, setPrice] = React.useState(false);
  let [member, setMember] = React.useState(false);
  let [duration, setDuration] = React.useState(false);
  let [mode, setMode] = React.useState(false);
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
  useEffect(()=>{
    getdata(page)
  },[page])

  return (
    <div>
      <Navbar />
      <ImageSlider images={images} />
      <div className={styles.middiv_filters_events}>
        <div className={styles.filterdiv}>
          <div className={styles.calhead}>
            <div
              onClick={() => {
                setSort(!sort);
              }}
              className={styles.head}
            >
              Sort By <span className={styles.drop}>{sort ? "-" : "+"}</span>
            </div>
            {sort ? (
              <div className={styles.sorts}>
                <p>Price: High - Low</p>
                <p>Price: Low - High</p>
                <p>Number of reviews</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.cithead}>
            <div
              onClick={() => {
                setCity(!city);
              }}
              className={styles.head}
            >
              Your City <span className={styles.drop}>{city ? "-" : "+"}</span>
            </div>
            {city ? (
              <input
                className={styles.cityselector}
                type="Button"
                placeholder="Search City of your choice"
              />
            ) : (
              ""
            )}
          </div>
          <div className={styles.prihead}>
            <div
              onClick={() => {
                setPrice(!price);
              }}
              className={styles.head}
            >
              Price <span className={styles.drop}>{city ? "-" : "+"}</span>
            </div>
            {price ? (
              <div className={styles.prices}>
                <p>Below ₹ 10000</p>
                <p>₹ 10001 - ₹ 30000</p>
                <p>₹ 30001 - ₹60000</p>
                <p>₹ 60001 - ₹100000</p>
                <p>Above ₹ 100001</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.mushead}>
            <div
              onClick={() => {
                setMember(!member);
              }}
              className={styles.head}
            >
              Music Type{" "}
              <span className={styles.drop}>{member ? "-" : "+"}</span>
            </div>
            {member ? (
              <div className={styles.musictype}>
                <p>Solo</p>
                <p>Duo</p>
                <p>Trio</p>
                <p>Full Band</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.gen}>
            <div
              onClick={() => {
                setDuration(!duration);
              }}
              className={styles.head}
            >
              Duration{" "}
              <span className={styles.drop}>{duration ? "-" : "+"}</span>
            </div>
            {duration ? (
              <div className={styles.genres}>
                <p>300 min</p>
                <p>270 min</p>
                <p>240 min</p>
                <p>210 min</p>
                <p>180 min</p>
                <p>150 min</p>
                <p>120 min</p>
                <p>90 min</p>
                <p>60 min</p>
                <p>30 min</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.modehead}>
            <div
              onClick={() => {
                setMode(!mode);
              }}
              className={styles.head}
            >
              Mode <span className={styles.drop}>{mode ? "-" : "+"}</span>
            </div>
            {mode ? (
              <div className={styles.modes}>
                <p>Offline</p>
                <p>Online</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={styles.artistcardsdiv}>
          {apidata.map((el,i)=><Artistcard key={el.id} image={el.thumbnailUrl}/>)}
        </div>
      </div>
      <Flex color={"white"} w="15em" justify={"space-between"} ButtonAlign={"center"} m="auto" mt="5em">
          <Button bgColor={"pink.400"} isDisabled={page===1}   onClick={()=>changePage(-1)}>Previous</Button>
          <Button bgColor={"pink.400"}>{page}</Button>
          <Button bgColor={"pink.400"} onClick={()=>changePage(1)}>Next</Button>
        </Flex>
      <Footer />
    </div>
  );
};

export default OurArtist;
