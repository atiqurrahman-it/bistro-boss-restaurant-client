import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTittle from "../../../component/SectionTittle/SectionTittle";

const Category = () => {
  return (
    <>
        <SectionTittle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTittle>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-20 mb-10 text-white">salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-20 mb-10 text-white">pasta</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-20 mb-10 text-white">pasta</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-20 mb-10 text-white">pasta</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-20 mb-10 text-white">pasta</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-20 mb-10 text-white">pasta</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-20 mb-10 text-white">pasta</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-20 mb-10 text-white">pasta</h1>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Category;
