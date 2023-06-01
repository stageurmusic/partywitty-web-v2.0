import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./ImageSlider.css";
import styles from "../CSS/slider.module.css"

const ImageSlider = ({images}) => {
  const settings = {
    className: "center",
    dots: true  ,
    arrows:false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    centerMode:true,
    centerPadding: "90px",
    autoplaySpeed: 4500,
    draggable:true,
    pauseOnHover:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          centerMode:true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          centerMode:true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        autoplay: true,
        centerMode:true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div  key={index} className={styles.slidediv}>
            <img  className={styles.slideimg} src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
      <hr className={styles.hr} style={{}} />
    </div>
  );
};

export default ImageSlider;
