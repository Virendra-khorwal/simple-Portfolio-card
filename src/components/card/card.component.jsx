import React from "react";
import image from "../../images/img.jpg";
import gmail from "../../images/gmail.svg";
import github from "../../images/github.svg";
import dev from "../../images/dev.png";
import linkedin from "../../images/linkedin.svg";

const Card = (props) => {
  return (
    <div className="bg-gray-800 w-96 rounded-md mx-auto my-auto  ">
      <div className="mt-16 space-y-8 m-3.5">
        <div className="ima overflow-hidden">
          <img
            src={image}
            className="overflow-hidden rounded-md mt-3.5"
            alt="image"
          />
        </div>
        <div className="nam text-center space-y-3.5 text-xl">
          <div>
            <h1 className="text-white font-medium ">Virendra Khorwal</h1>
            <h3 className="text-slate-300">Web and Android Developer</h3>
          </div>

          <div className="buttonContainer space-x-1.5 flex justify-center ">
            <button
              className="bg-slate-200 
              px-2.5 rounded-md 
              flex py-1.5 items-center 
              px-6
                py-2.5
                
              
                leading-tight
                rounded
                shadow-md
                hover:bg-blue-400 hover:shadow-lg
                focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out
            "
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="virendrakhorwalvk@gmail.com"
            >
              <img className="w-8 " src={gmail}></img>
              Email
            </button>
            <a
              href="https://www.linkedin.com/in/virendra-khorwal/"
              className="bg-slate-200 px-2.5 rounded-md flex py-1.5 items-center hover:bg-blue-400 hover:shadow-lg
                focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0"
            >
              <img className="w-8" src={linkedin}></img>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="about px-2.5 text-center">
          <h1 className="text-white">About</h1>
          <p className="text-slate-300">
            I am android and webdeveloper. I love to design and code. Currently
            studying. Tech Enthusiast. Always ready to work on projects.
          </p>
        </div>
        <div className="interest px-2.5 text-center">
          <h1 className="text-white">interest</h1>
          <p className="text-slate-300">Love to listen music, Poetry.</p>
        </div>
        <div className="skills px-2.5 text-center">
          <h1 className="text-white">Skills</h1>
          <p className="text-slate-300">
            {" "}
            Python, C.C++, Reactjs, React Native, Figma, Blender
          </p>
        </div>
        <div className="social flex justify-center space-x-7 pb-3 ">
          <a href="https://github.com/Virendra-khorwal">
            <img className="h-10" src={github}></img>
          </a>
          <a href="https://dev.to/virendrakhorwal">
            <img className="h-10" src={dev}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
