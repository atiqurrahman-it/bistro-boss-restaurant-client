import { useState } from "react";
import { useForm } from "react-hook-form";

const ItemEdit = () => {
    const {register,handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log("update",data)
    }

    const my_button = {
        background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
        color: "#FFFFFF",
        padding: "0px 30px",
      };

    return (
        <div className="w-full px-10">
        <h1 className="text-center text-3xl font-bold mt-[50px]">UPDATE ITEM</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Recipe Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
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
          
           <div className="mx-auto w-[250px]">
              <input className="btn mt-4 px-2" style={my_button}  type="submit" value="Update Recipe Details" />
           </div>
         
        </form>
      </div>
    );
};

export default ItemEdit;