import SectionTittle from "../../../component/SectionTittle/SectionTittle";
import chef1 from "../../../assets/home/slide1.jpg"
const ChefRecommends = () => {
  return (
    <div>
      <SectionTittle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTittle>

      <div className="md:flex gap-8 my-20 mx-10 md:mx-3 ">
        <div className="card  max-w-[400px] mx-auto bg-base-100 shadow-xl">
          <figure>
            <img
            className="w-full max-h-[300px]"
              src={chef1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center bg-white">
            <h2 className="text-2lx font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
              <button className="btn btn-outline border-0 border-b-4 btn-warning">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card  max-w-[400px] mx-auto bg-base-100 shadow-xl">
          <figure>
            <img
            className="w-full max-h-[300px]"
              src={chef1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center bg-white">
            <h2 className="text-2lx font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
              <button className="btn btn-[#1F2937] text-warning">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  max-w-[400px] mx-auto bg-base-100 shadow-xl">
          <figure>
            <img
            className="w-full max-h-[300px]"
              src={chef1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center bg-white">
            <h2 className="text-2lx font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
            <button className="btn btn-outline border-0 border-b-4 btn-warning">add to cart</button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChefRecommends;
