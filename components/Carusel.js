import React, {useRef} from "react";
import Slider from "react-slick";

const Carusel = () => {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false
  };
  return (
    <div className="relative">
      <button className=" absolute -left-5 top-[50%] slider-btn z-50 md:block" onClick={previous}>
        <img src="/images/leftArrow.png" alt="" />
      </button>

      <Slider ref={c => (slider.current = c)} {...sliderSettings}>
        {data.map((item, index) => {
          return (
            <div key={index} >
              <img src={item.sliderImage} alt="" className='w-full' />
            </div>
          );
        })}
      </Slider>

      <button className=" absolute -right-5 slider-btn top-[50%] z-50 md:block" onClick={next}>
        <img src="/images/rightArrow.png" alt="" />
      </button>
    </div>
  );
};

export default Carusel;

const data = [
  {
    sliderImage: "/images/102.png"
  },
  {
    sliderImage: "/images/7158 1.png"
  },
  {
    sliderImage: "/images/IMG_20211108_052745_941 1.png"
  },
  {
    sliderImage: "/images/IMG_20211108_052750_951 1.png"
  },
  {
    sliderImage: "/images/5291 1.png"
  },
  {
    sliderImage: "/images/2493 1.png"
  },
  {
    sliderImage: "/images/3474 1.png"
  },
  {
    sliderImage: "/images/IMG_20211108_052744_430 1.png"
  },
  {
    sliderImage: "/images/1946 1.png"
  },
  {
    sliderImage: "/images/IMG_20211108_052747_571 1.png"
  }
];
