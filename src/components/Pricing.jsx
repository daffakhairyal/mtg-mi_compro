import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Services
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
<div className="p-10 border border-neutral-700 rounded-xl flex flex-col h-full">
  <div className="relative h-[250px] overflow-hidden">
    <img
      src={option.image}
      className="absolute duration-300 hover:scale-110 object-cover w-full h-full"
      alt=""
    />
  </div>

<div className="flex-grow">
  <Link to={`/services#${option.id}`} className="duration-300 hover:text-yellow-500">
    <p className="text-4xl py-3">{option.title}</p>
  </Link>
  <p className="text-md">{option.description}</p>
</div>

</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
