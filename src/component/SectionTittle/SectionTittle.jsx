
const SectionTittle = ({heading,subHeading}) => {
    return (
        <div className="space-y-3 text-center my-10">
            <p className="text-warning">---{subHeading}--- </p>
            <h1 className="max-w-sm mx-auto border-y-2 border-[#caa84a] py-4 text-3xl uppercase font-bold"> {heading}</h1> 
        </div>
    );
};

export default SectionTittle;