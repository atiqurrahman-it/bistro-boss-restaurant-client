import FoodCard from "../../../component/FoodCard/FoodCard";
// pagination
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };


  const pageSize=6;
  const paginationTotalPage=Math.ceil(items.length/pageSize)
  console.log("total pagination page ",paginationTotalPage)
  const slide=[... new Array(paginationTotalPage).keys()]

 

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
     
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-10">

            {/* {
               slide.map(index=> {
                items.slice(index*pageSize,(index+1)*pageSize).map((item) => (
                  <FoodCard key={item._id} item={item}></FoodCard>
                ))
                
              })
            } */}

            {items.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
