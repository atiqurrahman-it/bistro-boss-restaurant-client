import SectionTittle from "../../../component/SectionTittle/SectionTittle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { useEffect, useState } from "react";
import { Navigation } from "swiper";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section>
      <SectionTittle
        heading="TESTIMONIALS"
        subHeading="What Our Clients Say"
      ></SectionTittle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}

          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center space-y-3 mx-24  my-16">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-5xl" />
                <p>{review.details}</p>
                <h3 className="text-2xl text-warning">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
