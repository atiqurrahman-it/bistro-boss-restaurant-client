import "./About.css";
const About = () => {
  return (
    <div className="aboutUs flex justify-center items-center min-h-[350px] md:min-h-[500px]">
      <div className=" space-y-3 bg-white px-10 md:px-20 py-5 md:py-10 text-black w-4/5	 ">
        <h1 className="text-center text-3xl">Bistro Boss</h1>
        <p className="text-[#151515]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default About;
