import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { background, checklistItems } from "../constants";
import { useNavigate } from "react-router-dom";

const Workflow = () => {
  const navigate = useNavigate(); 
  const handleNavigation = (event, path) => {
    event.preventDefault(); // Cegah reload halaman
    navigate(path); // Gunakan navigate untuk berpindah halaman
  };
  return (
    <div className="mt-10 md:mt-40 lg:mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
      Komitmen{" "}
        <span className="bg-gradient-to-b from-yellow-500 to-yellow-800 text-transparent bg-clip-text">
        Professional Kami
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row  justify-center ">
        <div className="p-3 md:p-10 shadow-xl">
          <img src="https://mtg.gold/img/about/about.png" alt="Coding" />
        </div>
        <div className="pt-10 w-full lg:w-1/2">
          {background.map((item,index)=>(
             <div key={index} className="flex mb-5">
             <div>
               <h5 className="mt-1 mb-2 text-md font-extralight text-justify">{item.description}</h5>
             </div>
           </div>
          ))}
          <a href="/profile"  onClick={(e) => handleNavigation(e, "/profile")} target="_blank" rel="noopener noreferrer" className="py-3 px-5 duration-300 hover:bg-yellow-700 bg-yellow-600">Selengkapnya</a>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
