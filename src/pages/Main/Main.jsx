import React, { useState, useEffect } from "react";
import axios from "axios";
import bg_Img from "../../assets/images/energy-bg.png";

const Main = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: { query: "laboratory", per_page: 3 },
            headers: {
              Authorization: `Client-ID HgwZSc5oO1ZpeMD2FqTkxn7Uxwh-aeZLITa_DKzDcew`,
            },
          }
        );
        setImages(response.data.results.map((img) => img.urls.regular));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className="relative pt-32 pb-20 md:pb-10 w-full min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg_Img})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative flex flex-col px-8 md:px-24 text-gray-100">
        <div className="fade-in-section mb-16 md:mb-10">
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Energy & Environment
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Polymer Lab
          </div>
        </div>
        <div className="relative bg-white bg-opacity-30 p-2 md:p-6 rounded-lg shadow-md max-w-sm md:max-w-md lg:max-w-4xl w-full ml-auto overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`w-full h-full object-cover rounded-t-lg absolute transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ top: 0, left: 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
