import SectionTittle from "../../../component/SectionTittle/SectionTittle";
import feature from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featureItem bg-fixed text-white  my-20 ">
   
     <div className="bg-[#151515B3] pt-8 h-52">
     
      <SectionTittle
      
        heading="FROM OUR MENU"
        subHeading="Check it out"
      ></SectionTittle>
     </div>

      <div className="md:flex justify-center items-center pb-20 pt-10 px-10 md:px-36 bg-[#151515B3]">
        <div>
          <img src={feature} alt="" />
        </div>
        <div className="md:ml-10 space-y-2">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores culpa porro sint impedit a, soluta consectetur cumque quod
            sed minima saepe aliquid deleniti possimus blanditiis incidunt!
            Perspiciatis nulla similique tempore obcaecati minima cupiditate,
            quod officia ipsa, eius quasi vel nobis ratione magnam laboriosam
            repellat odio nostrum inventore odit blanditiis.
          </p>

          <button className="btn btn-outline mt-3 border-0 border-b-4 btn-warning">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
