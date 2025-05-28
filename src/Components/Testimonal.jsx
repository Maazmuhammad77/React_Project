import React from "react";
import Slider from "react-slick";
import { ImQuotesRight } from "react-icons/im";
import Maaz from "../Images/Maaz.jpg"

const Testimonal = () => {
  const settings = {
    dots: true,            // show navigation dots
    infinite: true,        // infinite loop
    speed: 500,            // transition speed in ms
    slidesToShow: 3,       // number of slides to show
    slidesToScroll: 1,     // number of slides to scroll
    autoplay: true,        // auto scroll
    autoplaySpeed: 2000,
    centerPadding: "20px",   // auto scroll delay
  };

  let testi = [
    {
      img: "",
      quote: "This platform has changed the way I work. Highly recommended!",
      name: "Alice Johnson",
      icon: "“", // quotation mark (optional)
    },
    {
      img: "",
      quote: "Excellent customer service and super intuitive design.",
      name: "Mark Thompson",
      icon: "“",
    },
    {
      img: "",
      quote: "I've doubled my productivity thanks to these amazing tools.",
      name: "Sarah Kim",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center pb-10">
    <p className="text-sm text-gray-500">What our customers are saying</p>
    <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
    <p className="mt-4 text-base text-gray-600">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores
    </p>
  </div>
  <Slider {...settings}>
    {testi.map((data, index) => (
      <div key={index} className="px-2 sm:px-4 md:px-6">
        <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center">
          <img
            src={Maaz}
            alt={data.name}
            className="w-24 h-24 rounded-full mb-4"
          />
          <span className="text-3xl text-gray-400 mb-4">
            <ImQuotesRight />
          </span>
          <p className="text-gray-600 italic mb-2">"{data.quote}"</p>
          <h1 className="text-xl font-bold text-gray-800">{data.name}</h1>
        </div>
      </div>
    ))}
  </Slider>
</div>


      /* <Slider {...settings} className="">
         {testi.map((data)=>(
            
            <div className="bg-primary/40 rounded-lg p-7 w-[200px] mx-[-30px] ">
                 <div className="flex justify-between">
                  <img src={Maaz} alt="" className="w-24 h-24 rounded-full"/>
                  <span className="translate-y-16 text-3xl text-zinc-500"><ImQuotesRight /></span>
                 </div>
                 <div className=" space-y-4">
                  <p className="text-zinc-500">{data.quote}</p>
                  <h1 className="items-start text-3xl font-bold font-kalnia">{data.name}</h1>
                 </div>
            
        </div>
         ))}
      </Slider> */
    
  ) }

export default Testimonal;
