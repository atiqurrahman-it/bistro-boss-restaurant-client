import { useForm } from "react-hook-form";
import SectionTittle from "../../../component/SectionTittle/SectionTittle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";

const image_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
  const [axiosSecure]=useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    //  image hosing imgbb  start
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if(imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, recipe, price, category } = data;
          const newItem = { name,price:parseFloat(price), category, recipe, image: imgURL };
          console.log(newItem);

          // newItem save DB
           axiosSecure.post("/menu",newItem)
           .then(data=>{
               if(data.data.insertedId){
                console.log("after posing newItem",data.data);
                reset()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: ' item added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
           })
        }
      });
    // image hosing imgbb  end
  };


  const my_button = {
    background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
    color: "#FFFFFF",
    // padding: "0px 30px",
  };

  return (
    <div className="w-full px-10">
      <SectionTittle
        subHeading="whats new"
        heading="Add an Item "
      ></SectionTittle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex my-4 items-center ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered bg-white"
            >
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Desi</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24 bg-white"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full bg-white"
          />
        </div>

        <div className="mx-auto w-[200px]">
              <input className="btn btn-sm py-0  px-0" style={my_button}  type="submit" value="Add Item" />
               <i className="relative left-[150px] top-[-50px]"><FaUtensils className="text-white" /></i>
           </div>
        
       
      </form>
    </div>
  );
};

export default AddItem;
