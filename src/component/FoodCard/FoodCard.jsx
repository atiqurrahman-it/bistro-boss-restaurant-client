const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 bg-[#111827] text-white  px-3 py-1 mr-5 mt-5">${price}</p>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center 	">
          <button className="text-[#BB8506] bg-[#E8E8E8] btn btn-outline border-0 border-b-4  border-[#BB8506] btn-[#BB8506]">Add To Card </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
