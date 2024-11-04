import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="px-5 shadow-lg bg-slate-900 border border-neutral-900">
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full md:w-1/3 px-1 ">
            <div className="flex flex-col justify-center ">
              <div className="flex flex-col md:flex-row justify-center items-center  mb-6 ">
              <div className="flex mx-6 md:mx-3 h-10 w-10 p-2 bg-neutral-900 text-yellow-700 justify-center items-center rounded-full">
                {feature.icon}

              </div>
              <p className=" text-xl">{feature.text}</p>
              </div>

              <div className="flex flex-col justify-center ">

                <p className="text-sm text-center p-2 mb-10 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
