import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import contactImage from "../../assets/contact/banner.jpg";
import SectionTittle from "../../component/SectionTittle/SectionTittle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaPaperPlane,FaPhoneAlt,FaMapMarkerAlt,FaClock } from "react-icons/fa";

const ContactUs = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (Message) => {
    // send data to DB
    axiosSecure.post("/contactUs", Message).then((data) => {
      if (data.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Hi ${Message.name}`,
          text: "Thanks for contacting!!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      {/* web site title  */}
      <Helmet>
        <title>Bistro Boss/ContactUs</title>
      </Helmet>

      {/* main cover  */}
      <Cover
        bgImage={contactImage}
        tittle="CONTACT US"
        shortDescription="Would you like to try a dish?"
      ></Cover>

      {/* contact us   section */}
      <SectionTittle
        heading="OUR LOCATION"
        subHeading="Visit Us"
      ></SectionTittle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto text-center">
        <div className="card  ">
          <div className="bg-[#D1A054] py-3 flex items-center justify-center">
           <i ><FaPhoneAlt className="text-white text-2xl" /></i>
          </div>
          <div className="card-body mx-4 bg-[#F3F3F3]">
            <h2 className="text-2xl font-bold">Phone</h2>
            <p>08801518474541</p>
          </div>
        </div>
        <div className="card  ">
          <div className="bg-[#D1A054] py-3 flex items-center justify-center">
           <i><FaMapMarkerAlt className="text-white text-2xl" /></i>
          </div>
          <div className="card-body mx-4 bg-[#F3F3F3]">
            <h2 className="text-2xl font-bold">Address</h2>
            <p>Shyamoli,Dhaka</p>
          </div>
        </div>
        <div className="card  ">
          <div className="bg-[#D1A054] py-3 flex items-center justify-center">
           <i><FaClock className="text-white text-2xl" /></i>
          </div>
          <div className="card-body mx-4 bg-[#F3F3F3]">
            <h2 className="text-2xl font-bold">WORKING HOURS</h2>
            <p>IMon - Fri: 08:00 - 22:00 </p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>

      <SectionTittle
        heading="CONTACT FORM"
        subHeading="Send Us a Message"
      ></SectionTittle>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Phone* </span>
          </label>
          <input
            type="number"
            {...register("phone", { required: true })}
            placeholder="Enter your phone number"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message*</span>
          </label>
          <textarea
            {...register("message", { required: true })}
            className="textarea textarea-bordered h-24 bg-white"
            placeholder="Write your message here "
          ></textarea>
        </div>

        <div className="w-[250px] mx-auto mt-10">
          <input
            className="btn btn-[#916727] "
            type="submit"
            value="Send Message"
          />
          <i className="relative top-[-57px] right-[-210px] ">
            <FaPaperPlane className="text-white" />
          </i>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
