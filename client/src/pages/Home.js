import React from "react";
import HeroImg from "../assets/hero.svg";
import FeatImg from "../assets/feat.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="md:mx-28 mx-4 text-white py-10">
      <div className="md:grid md:grid-cols-2 items-center">
        <div className="bg-[#f4ca5f]  p-10  rounded-lg border-black border-4 ">
          <h1 className="text-3xl  text-black font-bold md:text-6xl">Who we are</h1>
          <p className="text-xl py-4  text-black font-bold tracking-wider text-justify">
          To help a little bit from our side our team brainstormed and came up with Lung'sClinic where users can predict lung cancer by uploading the required CT Scan. Currently, the FDA has approved several AI programs in CXR and chest CT reading, which enables AI systems to take part in lung cancer detection. We also have provided secure user auth.
          </p>

          <Link to="/lungCancerPrediction">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Lung Cancer Prediction
              </span>
            </button>
          </Link>
        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={HeroImg} alt="img" width="350" height="350" />
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 pt-12 items-center">
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={FeatImg} alt="img" width="350" height="350" />
        </div>
        <div className="p-10 bg-gray-600 opacity-100 border-black border-4 rounded-lg">
          <h1 className="text-3xl md:text-5xl">What else do we have</h1>
          <p className="text-xl md:text-2xl py-4 tracking-wider">
            Lung'Sclinic is a web app where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">Easy to use.</li>
            <li className="list-disc">Predict lung cancer</li>
            <li className="list-disc">Upload the image Chest CT Scan image.</li>
            <li className="list-disc">
              A web app where you can check wether you have Lung Cancer or Not.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
